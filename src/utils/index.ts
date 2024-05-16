import { Language } from "../enum/language";
import { IDictionary } from "../interface";
import { jp } from "../lang/jp";
import { us } from "../lang/us"
import { vn } from "../lang/vn";

export const getDictionary = (locale: Language): IDictionary => {
    switch(locale) {
        case Language.us:
            return us;
        case Language.vn:
            return vn;
        case Language.jp:
            return jp;
        default:
            return us;
    }
}