import i18n from "i18next";
import { initReactI18next } from "react-i18next";


const resources = {
    en: {
        translation: {
            "IntroTitle": "Mobile Application For The Ummah!"
        }
    },
    tr: {
        translation: {
            "IntroTitle": "Bienvenue à React et react-i18next"
        }
    },
    ar: {
        translation: {
            "IntroTitle": "Bienvenue à React et react-i18next"
        }
    }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: "en",

        interpolation: {
            escapeValue: false
        }
    });

export default i18n;