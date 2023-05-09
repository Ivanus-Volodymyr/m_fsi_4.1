import {CompaniesAction, CompaniesType, ICompaniesInitialState} from "../../types";

const InitialState: ICompaniesInitialState = {
    companies: [],
    pagination: null,
    loading: false,
    error: null,
    oneCompany: null,
    oneCompanyLoading: false,
    oneCompanyError: null,
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

        case CompaniesAction.FETCH_ONE_COMPANY:
            return {...state, oneCompanyLoading: true}
        case CompaniesAction.FETCH_ONE_COMPANY_SUCCESS:
            return {...state, oneCompanyLoading: false, oneCompany: action.payload}
        case CompaniesAction.FETCH_ONE_COMPANY_ERROR:
            return {...state, oneCompanyLoading: false, oneCompanyError: action.payload}


        default:
            return state;
    }
}
