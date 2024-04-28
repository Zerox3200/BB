import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
    en: {
        translation: {
            "IntroTitle": "Mobile Application For The Ummah!",
            "Intro1": `Deenbook Inc is a provider of Islamic Mobile Applications and Utilites for the Muslim Ummah.`
        }
    },
    tr: {
        translation: {
            "IntroTitle": "Bienvenue à React et react-i18next",
            "Intro1": `Deenbook Inc is a provider of Islamic Mobile Applications and Utilites for the Muslim Ummah.`
        }
    },
    ar: {
        translation: {
            "IntroTitle": "ههلا بلخميس",
            "Intro1": `Deenbook Inc is a provider of Islamic Mobile Applications and Utilites for the Muslim Ummah.`
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