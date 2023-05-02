import React, {useEffect} from 'react';
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
    UsersList
} from "./pages";

import './App.css';

import {fetchProfile} from "./store/action-creators";

const App = () => {
    const token = localStorage.getItem('access_token');
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProfile())
    }, []);

    return (
        <main>
            <Routes>
                <Route path={'/'} element={<Layout/>}>

                    <Route index element={<MainPage/>}/>
                    <Route path={'/about'} element={<About/>}/>

                    <Route element={<ToUnauthorizedUsers token={token} redirectPath={'/about'}/>}>
                        <Route path={'/auth'} element={<Authentication/>}/>
                        <Route path={'/registration'} element={<Registration/>}/>
                    </Route>

                    <Route element={<ProtectedRoute token={token} redirectPath={'/auth'}/>}>
                        <Route path={'/companies-list'} element={<CompaniesList/>}/>
                        <Route path={'/company-profile/:id'} element={<CompanyProfile/>}/>
                        <Route path={'/users-list'} element={<UsersList/>}/>
                        <Route path={'/user-profile/:id'} element={<UserProfile/>}/>
                    </Route>

                    <Route path="*" element={<h1>There's nothing here: 404!</h1>}/>
                </Route>
            </Routes>
        </main>
    );
}

export default App;
