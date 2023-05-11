import {CompaniesDataType, CompanyDataAction, ICompanyDataInitialState} from "../../types";

const CompanyDataInitialState: ICompanyDataInitialState = {
    members: [],
    invites: [],
    requests: [],
    loading: false,
    error: null,
}

export const companyDataReducer = (state: ICompanyDataInitialState = CompanyDataInitialState, action: CompaniesDataType): ICompanyDataInitialState => {
    switch (action.type) {
        case CompanyDataAction.FETCH_MEMBERS:
            return {...state, loading: true, members: [], error: null}
        case CompanyDataAction.FETCH_MEMBERS_SECCESS:
            return {...state, loading: false, members: action.payload, error: null}
        case CompanyDataAction.FETCH_MEMBERS_ERROR:
            return {...state, loading: false, members: [], error: action.payload}

        case CompanyDataAction.FETCH_INVITES:
            return {...state, loading: true, invites: [], error: null}
        case CompanyDataAction.FETCH_INVITES_SECCESS:
            return {...state, loading: false, invites: action.payload, error: null}
        case CompanyDataAction.FETCH_INVITES_ERROR:
            return {...state, loading: false, invites: [], error: action.payload}

        case CompanyDataAction.FETCH_REQUESTS:
            return {...state, loading: true, requests: [], error: null}
        case CompanyDataAction.FETCH_REQUESTS_SUCCESS:
            return {...state, loading: false, requests: action.payload, error: null}
        case CompanyDataAction.FETCH_REQUESTS_ERROR:
            return {...state, loading: false, requests: [], error: action.payload}

        default:
            return state
    }
}
