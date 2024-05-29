import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom'
import { UserContext } from '../../Context/UserContext';

export default function AdminProtector(props) {
    const { UserInformation } = useContext(UserContext);

    if (UserInformation.role === "Owner") {
        return props.children
    } else {
        return <Navigate to={"/DashApps2030"} />
    }
}
