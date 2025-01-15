import React from 'react';
import {useNavigate} from "react-router-dom";

import css from './Company.module.css';

import {ICompany} from "../../../types";

interface CompanyProps {
    company: ICompany;
}

const Company: React.FC<CompanyProps> = ({company}) => {
    const navigate = useNavigate();

    return (
        <div className={css.company_container} onClick={() => navigate(`/company-profile/${company.company_id}`)}>
            <div>Company ID: {company.company_id}</div>
            <div>Name: {company.company_name}</div>
            <div>title: {company.company_title}</div>
            <img src={company.company_avatar as string} alt="company_avatar"/>
        </div>
    );
};

export {Company};
