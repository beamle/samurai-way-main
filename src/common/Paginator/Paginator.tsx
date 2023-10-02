import React, {useState} from "react";
import s from "./Paginator.module.css";


export const Paginator = ({pageSize, usersCount, currentPage, pageChange}: PaginatorPropsType) => {

    let pagesCount = Math.ceil(usersCount / pageSize)
    let portionCount = Math.ceil(pagesCount / pageSize)
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * pageSize;
    let rightPortionPageNumber = portionNumber * pageSize;

    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div>
            { portionNumber > 1 && <button onClick={ () => { setPortionNumber(portionNumber - 1)} }> Prev </button> }
            {pages
                .filter(page => page >= leftPortionPageNumber && page <= rightPortionPageNumber)
                .map(page =>
                <span key={page} onClick={() => pageChange(page)}
                      className={page === currentPage ? s.selectedPage : ''}>
                {page}
            </span>)}
            { portionCount > portionNumber  && <button onClick={ () => { setPortionNumber(portionNumber + 1)} }> Next </button> }
        </div>
    )
}

type PaginatorPropsType = {
    pageSize: number
    usersCount: number
    currentPage: number
    pageChange: (page: number) => void
}
