import { createContext, useState } from "react";

export const NavContext = createContext();

export default function NavProvider({ children }) {

    const [margin, setMargin] = useState(true);
    const [MobileNavShow, setMobileNavShow] = useState(true);
    const [DashSideNav, setDashSideNav] = useState(false)


    const HandleMobileNav = () => {
        setMobileNavShow(MobileNavShow === true ? false : true);
    }

    const ShowDashNav = () => {
        setDashSideNav(DashSideNav === true ? false : true);
    }

    return <NavContext.Provider value={{
        margin, setMargin, MobileNavShow,
        setMobileNavShow, HandleMobileNav,
        DashSideNav, setDashSideNav, ShowDashNav
    }}>
        {children}
    </NavContext.Provider>
}