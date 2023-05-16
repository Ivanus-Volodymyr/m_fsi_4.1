import React, {useEffect} from 'react';
import {Route, Routes} from "react-router-dom";
import {useDispatch} from "react-redux";

import {
    BlockedUsers,
    CompanyInvites,
    CompanyInviteUser,
    CompanyProfileLayout,
    CompanyProfileMembers,
    CompanyRequests,
    Layout,
    ProtectedRoute,
    ToUnauthorizedUsers,
    UserCompanies,
    UserInvites,
    UserProfileLayout,
    UserRequests
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
                        <Route path={'/company-profile/'} element={<CompanyProfileLayout/>}>
                            <Route path={'/company-profile/:id/'} index element={<CompanyProfile/>}/>
                            <Route path={'/company-profile/:id/members-list/'} element={<CompanyProfileMembers/>}/>
                            <Route path={'/company-profile/:id/invites-list/'} element={<CompanyInvites/>}/>
                            <Route path={'/company-profile/:id/invite-user/'} element={<CompanyInviteUser/>}/>
                            <Route path={'/company-profile/:id/requests-list/'} element={<CompanyRequests/>}/>
                            <Route path={'/company-profile/:id/blocked-list/'} element={<BlockedUsers/>}/>
                        </Route>

                        <Route path={'/users-list'} element={<UsersListPage/>}/>
                        <Route path={'/user-profile/'} element={<UserProfileLayout/>}>
                            <Route path={'/user-profile/:id'} index element={<UserProfile/>}/>
                            <Route path={'/user-profile/:id/companies-list'} index element={<UserCompanies/>}/>
                            <Route path={'/user-profile/:id/requests-list'} index element={<UserRequests/>}/>
                            <Route path={'/user-profile/:id/invites-list'} index element={<UserInvites/>}/>
                        </Route>
                    </Route>

                    <Route path="*" element={<h1>There's nothing here: 404!</h1>}/>
                </Route>
            </Routes>
        </main>
    );
}

export default App;
