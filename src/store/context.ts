import { createContext } from "react";
import { LanguageAction, IState } from "../interface";
import { getDictionary } from "../utils";
import { Language } from "../enum/language";

const state: IState = { 
    dictionary: getDictionary(Language.us),
    currentLanguage: Language.us,
    emailJS: {
        serviceID: '',
        templateID: '',
        publicKey: ''
    }
};

const dispatch = (action: LanguageAction) => { action };
export const context = createContext([ state, dispatch ]);