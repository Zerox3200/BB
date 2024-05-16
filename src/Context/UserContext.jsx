import { createContext, useState } from "react";

export const UserContext = createContext();

export default function UserProvider({ children }) {

    const [UserInformation, setUserInformation] = useState("");


    return <UserContext.Provider value={{ UserInformation, setUserInformation }}>
        {children}
    </UserContext.Provider>
}