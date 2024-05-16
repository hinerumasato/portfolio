import { Language } from "../enum/language"
import { LanguageAction } from "../interface"

export const changeLocale = (locale: Language): LanguageAction => {
    return {
        type: 'dictionary/changeLocale',
        payload: locale
    }
}