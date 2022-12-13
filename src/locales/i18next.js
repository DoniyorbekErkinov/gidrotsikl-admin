import i18next from "i18next";
import detector from 'i18next-browser-languagedetector'
import { initReactI18next} from "react-i18next";
import translationUz from './uzbek-latin/translation.json'
import translationCr from './uzbek-cryll/translation.json'
import translationRu from './russian/translation.json'
import translationEng from './english/translation.json'

const resources = {
    uz: {
        translation: translationUz
    },
    cr: {
        translation: translationCr
    },
    en: {
        translation: translationEng
    },
    ru: {
        translation: translationRu
    }
}

if (!localStorage.getItem('lang')) {
    localStorage.setItem('lang', 'uz')
}

i18next
    .use(detector)
    .use(initReactI18next)
    .init({
    resources: resources,
    lng: localStorage.getItem('lang') ?? 'uz',
        fallbackLng: 'uz',
        interpolation: {
            escapeValue: false
        }
})

export default i18next;