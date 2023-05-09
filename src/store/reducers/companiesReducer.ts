import {CompaniesAction, CompaniesType, ICompaniesInitialState} from "../../types";

const InitialState: ICompaniesInitialState = {
    companies: [],
    pagination: null,
    loading: false,
    error: null,
    oneCompany: null,
    oneCompanyLoading: false,
    oneCompanyError: null,
    oneCompanyId: null,
    isUpdatedCompany: false,
    isDeletedCompany: false,
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
            return {...state, loading: true}
        case CompaniesAction.FETCH_ONE_COMPANY_SUCCESS:
            return {...state, loading: false, oneCompany: action.payload,}
        case CompaniesAction.FETCH_ONE_COMPANY_ERROR:
            return {...state, loading: false, oneCompanyError: action.payload}


        case CompaniesAction.CLEAR_ONE_COMPANY_STATE:
            return {
                ...state,
                oneCompany: null,
                oneCompanyLoading: false,
                oneCompanyError: null,
                oneCompanyId: null,
                isDeletedCompany: false,
                isUpdatedCompany: false
            }

        case CompaniesAction.CREATE_COMPANY:
            return {...state, oneCompanyLoading: true}
        case CompaniesAction.CREATE_COMPANY_SECCESS:
            return {...state, oneCompanyLoading: false, oneCompanyError: null, oneCompanyId: action.payload}
        case CompaniesAction.CREATE_COMPANY_ERROR:
            return {...state, oneCompanyLoading: false, oneCompanyError: action.payload}

        case CompaniesAction.UPDATE_COMPANY:
            return {
                ...state,
                oneCompanyLoading: true,
                oneCompanyId: null,
                oneCompany: null,
                isUpdatedCompany: false,
                oneCompanyError: null
            }
        case CompaniesAction.UPDATE_COMPANY_SUCCESS:
            return {...state, oneCompanyLoading: false, oneCompanyId: action.payload, isUpdatedCompany: true}
        case CompaniesAction.UPDATE_COMPANY_ERROR:
            return {
                ...state,
                oneCompanyLoading: false,
                isUpdatedCompany: false,
                oneCompanyId: null,
                oneCompany: null,
                oneCompanyError: action.payload
            }


        case CompaniesAction.DELETE_COMPANY:
            return {...state, isDeletedCompany: action.payload, oneCompanyLoading: true}
        case CompaniesAction.DELETE_COMPANY_SUCCESS:
            return {...state, isDeletedCompany: action.payload, oneCompanyLoading: false, oneCompany: null, oneCompanyId: null}
        case CompaniesAction.DELETE_COMPANY_ERROR:
            return {...state, oneCompanyLoading: false, oneCompanyError: action.payload}

        default:
            return state;
    }
}

export const clearCompanyState = () => ({type: CompaniesAction.CLEAR_ONE_COMPANY_STATE});
