import React from 'react';
import {Outlet} from "react-router-dom";

import css from './CompanyProfileLayout.module.css';
import {CompanyProfileHeader} from "../CompanyProfileHeader/CompanyProfileHeader";

const CompanyProfileLayout: React.FC = () => {
    return (
        <div className={css.company_layout}>
            <CompanyProfileHeader/>
            <div className={css.outlet}>
                <Outlet/>
            </div>
        </div>
    );
};

export {CompanyProfileLayout};
