import React from 'react';

import css from './Company.module.css';

import {ICompany} from "../../../types";

interface CompanyProps {
    company: ICompany;
}

const Company: React.FC<CompanyProps> = ({company}) => {
    return (
        <div className={css.company_container}>
            <div>{company.company_id}</div>
            <div>{company.company_name}</div>
            <div>{company.company_title}</div>
            <img src={company.company_avatar as string} alt="company_avatar"/>
        </div>
    );
};

export {Company};
