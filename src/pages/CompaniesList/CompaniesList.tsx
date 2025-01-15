import React from 'react';

import css from './CompaniesList.module.css';

import {Companies, CreateCompany} from "../../components/ForCompaniesListPage";

const CompaniesList: React.FC = () => {

    return (
        <div className={css.companies_list_container}>
            <div>
                <CreateCompany/>
            </div>
            <hr/>
            <Companies/>
        </div>
    );
};

export {CompaniesList};
