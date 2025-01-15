import React, {useEffect, useState} from 'react';
import {useDispatch} from "react-redux";

import css from './Companies.module.css';

import {useAppSelector} from "../../../hooks/useAppSelector";
import {fetchAllCompanies} from "../../../store/action-creators";
import {Company} from "../Company/Company";
import {ICompany, IPagination} from "../../../types";
import {Pagination} from "../../GeneralComponnents";

const Companies = () => {
    const {companies, loading, pagination} = useAppSelector(state => state.companies);

    const dispatch = useDispatch();

    const [page, setPage] = useState<number>(1);


    useEffect(() => {
        dispatch(fetchAllCompanies(page))
    }, [page])

    return (
        <div className={css.companies_container}>
            {loading ? <h1>Loading.......</h1> :
                <div>
                    {companies.map((company: ICompany) => <Company key={company.company_id} company={company}/>)}

                    <Pagination
                        currentPage={page}
                        pagination={pagination as IPagination}
                        setPage={setPage}
                    />
                </div>
            }
        </div>
    );
};

export {Companies};
