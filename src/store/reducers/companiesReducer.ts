import {CompaniesAction, CompaniesType, ICompaniesInitialState} from "../../types";

const InitialState: ICompaniesInitialState = {
    companies: [],
    pagination: null,
    loading: false,
    error: null,
};


export const companiesReducer = (state: ICompaniesInitialState = InitialState, action: CompaniesType): ICompaniesInitialState => {
    switch (action.type) {
        case CompaniesAction.FETCH_COMPANIES:
            return {...state, loading: true}
        case CompaniesAction.FETCH_COMPANIES_SUCCESS:
            return {
                ...state,
                loading: false,
                companies: action.payload.companies,
                pagination: action.payload.pagination
            }
        case CompaniesAction.FETCH_COMPANIES_ERROR:
            return {...state, loading: false, error: action.payload}


        default:
            return state;
    }
}
