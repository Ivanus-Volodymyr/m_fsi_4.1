import React from 'react';
import {Route, Routes} from "react-router-dom";

import {Layout} from "./components";

import {
    About,
    Authentication,
    CompaniesList,
    CompanyProfile,
    MainPage,
    Registration,
    UserProfile,
    UsersList
} from "./pages";

const App = () => {
    return (
        <main>
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route index element={<MainPage/>}/>
                    <Route path={'/about'} element={<About/>}/>
                    <Route path={'/auth'} element={<Authentication/>}/>
                    <Route path={'/companies-list'} element={<CompaniesList/>}/>
                    <Route path={'/company-profile'} element={<CompanyProfile/>}/>
                    <Route path={'/registration'} element={<Registration/>}/>
                    <Route path={'/user-profile'} element={<UserProfile/>}/>
                    <Route path={'/users-list'} element={<UsersList/>}/>
                </Route>
            </Routes>
        </main>
    );
}

export default App;
