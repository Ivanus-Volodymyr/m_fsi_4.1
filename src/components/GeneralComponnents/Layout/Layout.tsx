import React from 'react';

import {Header} from "../Header/Header";
import {Footer} from "../Footer/Footer";
import {Outlet} from "react-router-dom";
import {PageTemplate} from "../PageTemplate/PageTemplate";


const Layout = () => {
    return (
        <>
            <Header/>
            <PageTemplate>
                <Outlet/>
            </PageTemplate>
            <Footer/>
        </>
    );
};

export {Layout};
