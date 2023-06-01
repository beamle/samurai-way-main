import React from "react";
import s from "./Header.module.css";

function Header() {
    return (
        <div className={s.header}>
            <div className={s.headerContainer}>
                <div className={s.topheader}>
                    <div className={s.logo}><img src="https://cdn.pixabay.com/photo/2012/04/26/18/41/banana-42793_1280.png" alt="banana"/></div>
                    <div className={s.searchBar}><textarea placeholder={'search'}></textarea></div>
                </div>
                <div className={s.subheader}>
                    <a href='#'> Home</a>
                    <a href='#'> Friends</a>
                    <a href='#'> Messages</a>
                </div>
            </div>
        </div>
    )
}

export default Header;