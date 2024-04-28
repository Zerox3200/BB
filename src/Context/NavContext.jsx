import { createContext, useMemo, useState } from "react";
import { useTranslation } from 'react-i18next';

export const NavContext = createContext();

export default function NavProvider({ children }) {

    const [margin, setMargin] = useState(true);
    const [MobileNavShow, setMobileNavShow] = useState(true);
    const { i18n } = useTranslation();

    const [Lan, setLan] = useState('En');

    useMemo(() => ({ Lan: Lan, setLan }), [Lan]);           

    const HandleMobileNav = () => {
        setMobileNavShow(MobileNavShow === true ? false : true);
    }

    const HandleTranslate = (Lan) => {
        i18n.changeLanguage(Lan.toLowerCase());

    }



    return <NavContext.Provider value={{
        margin, setMargin, MobileNavShow,
        setMobileNavShow, HandleMobileNav, Lan, setLan,
        HandleTranslate
    }}>
        {children}
    </NavContext.Provider>
}