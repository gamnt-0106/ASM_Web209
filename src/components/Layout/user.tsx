import React from "react";
import Header from "../Header";
import {Outlet} from 'react-router-dom'


const UserLayout = (props: any) => {
    return (
        <>
            <Header/>
            <Outlet/>
        </>
    )
}

export default UserLayout