import React, {FormHTMLAttributes, ReactNode} from 'react';

import css from './Form.module.css';

type FormProps = FormHTMLAttributes<HTMLFormElement> & {
    children: ReactNode;
}
const Form = ({children, ...props}: FormProps) => {
    return (
        <form className={css.form} {...props}>
            {children}
        </form>
    );
};

export {Form};
