import React from 'react';

import css from './CompaniesList.module.css';
import {Companies} from "../../components/ForCompaniesListPage";

const CompaniesList = () => {
    return (
        <div className={css.companies_list_container}>
            <Companies/>
        </div>
    );
};

export {CompaniesList};
