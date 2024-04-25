import React, { useContext, useState } from 'react'
import EnglishFlag from './../../Assets/Images/united-kingdom_206592.png';
import TurkishFlag from './../../Assets/Images/turkey_14009824.png';
import ArabicFlag from './../../Assets/Images/saudi-arabia_5111862.png';
import { NavContext } from '../../Context/NavContext';
import { IoMdClose } from 'react-icons/io';
import './Language.scss';

const Languages = React.memo(() => {
    const { Lan, setLan, HandleTranslate } = useContext(NavContext);
    const [showLanguages, setShowLanguages] = useState(false);

    const handleLanguage = () => {
        setShowLanguages(!showLanguages);
    };

    const handleType = (Lang) => {
        setLan(Lang);
        HandleTranslate(Lang)
    };

    const languageChoices = [
        { lang: 'En', flag: EnglishFlag },
        { lang: 'Tr', flag: TurkishFlag },
        { lang: 'Ar', flag: ArabicFlag },
    ];


    return <div className="Language px-2 d-flex justify-content-between align-items-center"
        onClick={() => handleLanguage()}>
        <h1 className="h5 m-0">{Lan}</h1>
        <img src={Lan === "En" ? EnglishFlag : Lan === "Tr" ? TurkishFlag : Lan === 'Ar' ? ArabicFlag : null}
            alt="..." loading="lazy" />
        <div
            className={`LanguageChecking ${showLanguages ? 'Show' : ''}`}>
            <div className="d-flex justify-content-end px-2">
                <IoMdClose onClick={() => handleLanguage()} />
            </div>
            {languageChoices.map(({ lang, flag }) => (
                <div className="LangChoice d-flex justify-content-between px-2" key={lang}
                    onClick={() => handleType(lang)}>
                    <h1 className="h5 m-0">{lang}</h1>
                    <img src={flag} alt="..." loading="lazy" />
                </div>
            ))}
        </div>
    </div>
})

export default Languages;