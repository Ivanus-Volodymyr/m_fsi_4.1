import React, {forwardRef} from 'react';

import css from './Input.module.css';

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;
const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
    return (
        <input className={css.input} ref={ref} {...props} />
    );
});

export {Input};
