import { createContext, useState } from "react";

export const NavContext = createContext();

export default function NavProvider({ children }) {
    const [margin, setMargin] = useState(true);
    const [MobileNavShow, setMobileNavShow] = useState(true);

    const HandleMobileNav = () => {
        setMobileNavShow(MobileNavShow === true ? false : true);
    }
    return <NavContext.Provider value={{ margin, setMargin, MobileNavShow, setMobileNavShow, HandleMobileNav }}>
        {children}
    </NavContext.Provider>
}