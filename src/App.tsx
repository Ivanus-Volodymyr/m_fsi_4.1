import React, {useEffect, useState} from 'react';
import {Route, Routes} from "react-router-dom";
import {useDispatch} from "react-redux";

import {Layout, ProtectedRoute, ToUnauthorizedUsers} from "./components";

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
import {useAuth0} from "@auth0/auth0-react";

const App = () => {
    const {user, isAuth} = useAppSelector(state => state.profile);

    const dispatch = useDispatch();
    const {isAuthenticated, getAccessTokenSilently} = useAuth0();
    const [isAuth0, setIsAuth0] = useState<string>('');


    const getTokenIfAuth0Login = async () => {
        if (isAuthenticated) {
            const token = await getAccessTokenSilently();
            localStorage.setItem('access_token', token);
            setIsAuth0(token);
        }
    }

    useEffect(() => {
        getTokenIfAuth0Login()
    }, [isAuthenticated]);


    useEffect(() => {
        dispatch(fetchProfile())
    }, [isAuth0, isAuth, isAuthenticated]);


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
                        <Route path={'/company-profile/:id'} element={<CompanyProfile/>}/>
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
