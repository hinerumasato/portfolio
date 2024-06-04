import { Language } from "@/enum/language";

export interface LanguageAction {
    type: string;
    payload: Language;
}