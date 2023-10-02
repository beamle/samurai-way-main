import React from "react";
import s from "./Paginator.module.css";


export const Paginator = ({pageSize, usersCount, currentPage, pageChange}: PaginatorPropsType) => {

    let pagesCount = Math.ceil(usersCount / pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div>
            {pages.map(page =>
                <span key={page} onClick={() => pageChange(page)}
                      className={page === currentPage ? s.selectedPage : ''}>
                {page}
            </span>)}
        </div>
    )
}

type PaginatorPropsType = {
    pageSize: number
    usersCount: number
    currentPage: number
    pageChange: (page: number) => void
}
