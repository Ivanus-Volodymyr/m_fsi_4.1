import React, {useEffect} from 'react';

import css from './CompanyRequests.module.css';
import {useAppSelector} from "../../../hooks/useAppSelector";
import {useDispatch} from "react-redux";
import {fetchRequests} from "../../../store/action-creators";
import {useParams} from "react-router-dom";

const CompanyRequests: React.FC = () => {
    const {requests, loading} = useAppSelector(state => state.companyData);
    const dispatch = useDispatch();
    const {id} = useParams();

    useEffect(()=> {
        dispatch(fetchRequests(Number(id)))
    },[])


    return (
        <div className={css.company_requests_container}>
            {requests.length > 0 && requests.map(request=> <div>{JSON.stringify(request)}</div>) }
            <div>
                {requests.length === 0 && <h1>No any requests!!!</h1>}
            </div>
        </div>
    );
};

export {CompanyRequests};
