import { createContext, useState } from "react";

export const NavContext = createContext();

export default function NavProvider({ children }) {
    const [margin, setMargin] = useState(true);
    const toggleNavbar = () => setMargin(!margin);

    return <NavContext.Provider value={{ margin, setMargin, toggleNavbar }}>
        {children}
    </NavContext.Provider>
}