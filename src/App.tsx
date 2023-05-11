import React, {useEffect} from 'react';
import {Route, Routes} from "react-router-dom";
import {useDispatch} from "react-redux";

import {
    CompanyInvites,
    CompanyProfileLayout,
    CompanyProfileMembers,
    CompanyRequests,
    Layout,
    ProtectedRoute,
    ToUnauthorizedUsers
} from "./components";

import {
    About,
    Authentication,
    CompaniesList,
    CompanyProfile,
    MainPage,
    Registration,
    UserProfile,
    UsersListPage,
} from "./pages";

import './App.css';

import {fetchProfile} from "./store/action-creators";
import {useAppSelector} from "./hooks/useAppSelector";

const App = () => {
    const {user, canIGetProfile} = useAppSelector(state => state.profile);

    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(fetchProfile())
    }, [canIGetProfile]);


    return (
        <main>
            <Routes>
                <Route path={'/'} element={<Layout/>}>

                    <Route index element={<MainPage/>}/>
                    <Route path={'/about'} element={<About/>}/>

                    <Route element={<ToUnauthorizedUsers user={user} redirectPath={'/about'}/>}>
                        <Route path={'/auth'} element={<Authentication/>}/>
                        <Route path={'/registration'} element={<Registration/>}/>
                    </Route>

                    <Route element={<ProtectedRoute user={user} redirectPath={'/auth'}/>}>
                        <Route path={'/companies-list'} element={<CompaniesList/>}/>
                        <Route path={'/company-profile/:id'} element={<CompanyProfileLayout/>}>
                            <Route path={'/company-profile/:id/'} index element={<CompanyProfile/>}/>
                            <Route path={'/company-profile/:id/members-list/'} element={<CompanyProfileMembers/>}/>
                            <Route path={'/company-profile/:id/invites-list/'} element={<CompanyInvites/>}/>
                            <Route path={'/company-profile/:id/requests-list/'} element={<CompanyRequests/>}/>
                        </Route>

                        <Route path={'/users-list'} element={<UsersListPage/>}/>
                        <Route path={'/user-profile/:id'} element={<UserProfile/>}/>
                    </Route>

                    <Route path="*" element={<h1>There's nothing here: 404!</h1>}/>
                </Route>
            </Routes>
        </main>
    );
}

export default App;
