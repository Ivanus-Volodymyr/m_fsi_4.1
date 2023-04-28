import React, {ReactNode} from 'react';

import css from './PageTemplate.module.css';

type PageTemplateProps = {
    children: ReactNode;
}
const PageTemplate = ({children}: PageTemplateProps) => {
    return (
        <div className={css.container}>
            <div className={css.container_page}>
                {children}
            </div>
        </div>
    );
};

export {PageTemplate};
