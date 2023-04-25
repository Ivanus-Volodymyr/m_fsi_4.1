import React, {useState} from 'react';

import css from './MainPage.module.css';
import {Modal} from "../../components";

const MainPage = () => {
    const [active, setActive] = useState(false);


    return (
        <div className={css.main_page_container}>
            <h1>Hello, m_fsi_4.1 Main Page</h1>

            {/*it`s only to try modal window*/}
            <button onClick={() => setActive(true)}>Modal open please</button>
            <Modal activeModal={active} setActive={setActive}>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad at blanditiis delectus dolore explicabo
                    mollitia nemo optio rerum? Fugiat hic libero molestias repellendus soluta veritatis vero? Dolor ipsa
                    maxime omnis!
                </p>
            </Modal>
        </div>
    );
};

export {MainPage};
