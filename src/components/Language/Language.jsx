import React, { useEffect, useState } from 'react'
import EnglishFlag from './../../Assets/Images/united-kingdom_206592.png';
import TurkishFlag from './../../Assets/Images/turkey_14009824.png';
import ArabicFlag from './../../Assets/Images/saudi-arabia_5111862.png';
import PakistanFlag from '../../Assets/Images/pakistan_5975520.png'
import { IoMdClose } from 'react-icons/io';
import './Language.scss';
import { useTranslation } from 'react-i18next';
import { reactLocalStorage } from 'reactjs-localstorage';


const Languages = React.memo(() => {
    const [showLanguages, setShowLanguages] = useState(false);
    const { i18n } = useTranslation();
    const MainLanguage = reactLocalStorage.get("lan");

    // const HandleTranslatation = useCallback((Lan) => {
    //     // window.location.reload();
    //     reactLocalStorage.set("lan", Lan.toLowerCase());
    //     i18n.changeLanguage(Lan.toLowerCase());
    // }, [i18n]);

    const handleLanguage = () => {
        setShowLanguages(!showLanguages);
    };

    const HandleTranslatation = (Lan) => {
        reactLocalStorage.set("lan", Lan.toLowerCase());
        window.location.reload(true);
    };

    useEffect(() => {
        const storedLanguage = reactLocalStorage.get("lan");
        if (storedLanguage) {
            i18n.changeLanguage(storedLanguage.toLowerCase());
        }
    }, [i18n]);

    const languageChoices = [
        { lang: 'En', flag: EnglishFlag },
        { lang: 'Tr', flag: TurkishFlag },
        { lang: 'Ar', flag: ArabicFlag },
        { lang: 'ur', flag: PakistanFlag },
    ];

    return <div className="Language px-2 d-flex justify-content-between align-items-center" onClick={() => handleLanguage()}>

        <h1 className="h5 m-0">{!MainLanguage ? 'En' : MainLanguage.split('')[0].toUpperCase() + MainLanguage.split('')[1]}</h1>

        <img src={MainLanguage === "en" ? EnglishFlag : MainLanguage === "tr" ?
            TurkishFlag : MainLanguage === 'ar' ? ArabicFlag : MainLanguage === 'ur' ? PakistanFlag : EnglishFlag}
            alt="..." loading="lazy" />

        <div className={`LanguageChecking ${showLanguages ? 'Show' : ''}`}>

            <div className="d-flex justify-content-end px-2">
                <IoMdClose onClick={() => handleLanguage()} />
            </div>

            {languageChoices.map(({ lang, flag }) => (
                <div className="LangChoice d-flex justify-content-between px-2" key={lang}
                    onClick={() => HandleTranslatation(lang)}>
                    <h1 className="h5 m-0">{lang}</h1>
                    <img src={flag} alt="..." loading="lazy" />
                </div>
            ))}

        </div>

    </div>
})

export default Languages;