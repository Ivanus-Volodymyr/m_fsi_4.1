import React from 'react';

import {pages, totalButtons} from "../../../utils/page";
import {Button} from "../UI";

import css from './Pagination.module.css';
import {IPagination} from "../../../types";

interface PaginationProps {
    currentPage: number,
    pagination: IPagination,
    setPage: (page: number) => void
}

const Pagination: React.FC<PaginationProps> = ({currentPage, setPage, pagination}) => {
    const number = totalButtons(pagination?.total_page, 5);
    const pagesArray = pages(number, currentPage);
    return (
        <div className={css.pagination}>
            {pagesArray.map(page => <Button key={page} onClick={() => setPage(page)}>
                <span className={currentPage === page ? css.span : ''}>{page}</span>
            </Button>)}
        </div>
    );
};

export {Pagination};
