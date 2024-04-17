import { createContext, useState } from "react";


export const NavContext = createContext();

export function NavContextProvider(props) {
    const [ShowMenu, setShowMenu] = useState(false);
    const Showing = () => {
        setShowMenu(ShowMenu === true ? false : true);
    }
    return <NavContext.Provider value={{ setShowMenu, ShowMenu, Showing }}>
        {props.children}
    </NavContext.Provider>
}