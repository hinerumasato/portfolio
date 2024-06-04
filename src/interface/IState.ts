import { Language } from "@/enum/language";
import { IDictionary } from "./IDictionary";
import { IEmailJS } from "./IEmailJS.ts";


export interface IState {
    dictionary: IDictionary;
    emailJS: IEmailJS;
    currentLanguage: Language;
}