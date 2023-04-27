import React, {useState} from 'react';
import {useDispatch} from "react-redux";

import {Modal} from "../GeneralComponnents";
import {useAppSelector} from "../../hooks/useAppSelector";
import {counterMinusAction, counterPlusAction} from "../../store/reducers";

const TestComponent = () => {
    const [active, setActive] = useState(false);
    const {value} = useAppSelector(state => state.counter);
    const dispatch = useDispatch();


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
                <button onClick={() => plus()}><h2>Plus</h2></button>
                <button onClick={() => minus()}><h2>Minus</h2></button>
            </div>


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

export default TestComponent;
