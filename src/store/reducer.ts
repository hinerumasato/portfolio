import { Language } from "../enum/language";
import { LanguageAction, IState } from "../interface";
import { getDictionary } from "../utils";


export const rootReducer = (state: IState, action: LanguageAction) => {
    switch(action.type) {
        case 'dictionary/changeLocale': {
            const returnData: IState = {
                ...state,
                dictionary: getDictionary(action.payload),
                currentLanguage: action.payload
            }
            localStorage.setItem('locale', action.payload);
            return returnData;
        }
        default: {
            const returnData: IState = { ...state, dictionary: getDictionary(Language.us), currentLanguage: Language.us};
            localStorage.setItem('locale', Language.us);
            return returnData;
        }
    }
}