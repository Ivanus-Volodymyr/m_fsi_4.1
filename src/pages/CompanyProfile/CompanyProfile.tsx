import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";
import {useParams} from "react-router-dom";

import css from './CompanyProfile.module.css';
import {useAppSelector} from "../../hooks/useAppSelector";
import {fetchOneCompany} from "../../store/action-creators";
import {Button} from "../../components";

const CompanyProfile: React.FC = () => {
    const {oneCompany, oneCompanyLoading} = useAppSelector(state => state.companies);

    const dispatch = useDispatch();
    const {id} = useParams();

    useEffect(() => {
        dispatch(fetchOneCompany(Number(id)));
    }, [id])


    return (
        <div className={css.company_profile_container}>
            {oneCompanyLoading ? <h1>Loading ....</h1> :
                <div className={css.company_detail_block}>
                    <div className={css.company_detail_block_header}>
                        <div>Company: {oneCompany?.company_name}</div>
                        <Button>Delete Company</Button>
                    </div>
                    <div>

                    </div>
                </div>
            }
        </div>
    );
};

export {CompanyProfile};
