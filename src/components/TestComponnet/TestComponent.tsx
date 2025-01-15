import React, {useEffect, useState} from 'react';
import {useDispatch} from "react-redux";

import {Button, Modal} from "../GeneralComponnents";
import {useAppSelector} from "../../hooks/useAppSelector";
import {counterMinusAction, counterPlusAction} from "../../store/reducers";

const TestComponent: React.FC = () => {
    const [active, setActive] = useState(false);
    const {value} = useAppSelector(state => state.counter);

    const dispatch = useDispatch();

    useEffect(() => {
        // dispatch(fetchUsers())
    }, [])


    const plus = () => {
        dispatch(counterPlusAction(1));
    }
    const minus = () => {
        dispatch(counterMinusAction(1));
    }

    return (
        <div>
            <div>
                <h1>{value}</h1>
                <Button onClick={() => plus()}><h2>Minus</h2></Button>
                <Button onClick={() => minus()}><h2>Minus</h2></Button>
            </div>


            {/*it`s only to try modal window*/}
            <Button onClick={() => setActive(true)}>Modal open please</Button>
            <Modal activeModal={active} setActive={setActive}>
                {/*{users.map(user => <Button key={user.user_id}>{user.user_firstname}</Button>)}*/}
            </Modal>
        </div>
    );
};

export {TestComponent};
