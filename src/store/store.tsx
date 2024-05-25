import { useReducer } from "react";
import { IState } from "../interface";
import { getDictionary } from "../utils";
import { context } from "./context";
import { rootReducer } from "./reducer";
import { Language } from "../enum/language";

const initialState: IState = { 
    dictionary: getDictionary(localStorage.getItem('locale') as Language || Language.us),
    currentLanguage: localStorage.getItem('locale') as Language || Language.us,
    emailJS: {
        serviceID: 'portfolio',
        templateID: 'template_cl2qzyl',
        publicKey: 'AZdAQyDOAedH6FvOU'
    }
};

export const ContextProvider: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
    const [state, dispatch] = useReducer(rootReducer, initialState);
    const { Provider } = context;
    return (
        <Provider value={[state, dispatch]}>
            {children}
        </Provider>
    )
}