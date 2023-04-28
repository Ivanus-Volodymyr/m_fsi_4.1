import React from 'react';

import css from './MainPage.module.css';
import {TestComponent} from "../../components";

const MainPage = () => {

    return (
        <div className={css.main_page_container}>
            <h1>Hello, m_fsi_4.1 Main Page</h1>
            <TestComponent/>
        </div>
    );
};

export {MainPage};
