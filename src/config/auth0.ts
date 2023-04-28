import {env} from "./config";

interface Auth0 {
    domain: string;
    clientId: string;
}

export const auth0Config: Auth0 = {
    domain: env.REACT_APP_AUTH0_DOMIAN,
    clientId: env.REACT_APP_AUTH0_CLIENT_ID
}
