import React from 'react';
import {pages, totalButtons} from "../../../utils/page";
import {Button} from "../UI";

import css from './Pagination.module.css';

interface PaginationProps {
    limit: number,
    page: number,
    totalPages: number,
    setPage: (page: number) => void
}

const Pagination: React.FC<PaginationProps> = ({page, setPage, totalPages, limit}) => {
    const number = totalButtons(totalPages, limit);
    const pagesArray = pages(number);
    return (
        <div className={css.pagination}>
            {pagesArray.map(page => <Button key={page} onClick={() => setPage(page)}>{page}</Button>)}
        </div>
    );
};

export {Pagination};
