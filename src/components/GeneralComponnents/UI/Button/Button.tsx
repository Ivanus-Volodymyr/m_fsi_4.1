import React from 'react';

import css from './Button.module.css';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    children: React.ReactNode;
}

const Button = ({children, ...props}: ButtonProps) => {
    return (
        <button {...props} className={css.button}>
            {children}
        </button>
    );
};

export {Button};
