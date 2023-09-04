import React from "react";
// import s from "./Header.module.css";
import s from './Header.module.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHeart} from "@fortawesome/free-regular-svg-icons/faHeart";
import {faBell} from "@fortawesome/free-regular-svg-icons/faBell";
import {faEnvelope} from "@fortawesome/free-regular-svg-icons/faEnvelope";
import {NavLink} from "react-router-dom";
import {UserDataType} from "../../auth/auth-reducer";

type HeaderPropsType = {
    isAuth: boolean
    // setUserAuthData: (userData: UserDataType) => void
}

const Header = ({isAuth}: HeaderPropsType) =>{
    return (
        <div className={s.header}>

            <div className={s.headerContainer}>
                <div className={s.topheader}>
                    <div className={s.logoWrapper}>
                        {/*<div className={s.logo}><img src="https://cdn.pixabay.com/photo/2012/04/26/18/41/banana-42793_1280.png" alt="banana"/></div>*/}
                        <p className={s.logo}>BetterThanFacebookAnyways</p>
                    </div>
                    {/*<div className={s.sbWrapper}>*/}
                    {/*    <div className={s.searchBar}><textarea placeholder={'search'}></textarea></div>*/}
                    {/*</div>*/}
                    {/*<div className={s.icWrapper}>*/}
                    {/*    <div className={s.ic}>{heart}</div>*/}
                    {/*    <div className={s.ic}>{bell}</div>*/}
                    {/*    <div className={s.ic}>{mail}</div>*/}
                    {/*    <div className={s.ic}>*/}
                    {/*        <div className={s.profileImg}><img src="https://cdn.pixabay.com/photo/2012/04/26/18/41/banana-42793_1280.png" alt="banana"/></div>*/}
                    {/*    </div>*/}

                    {/*</div>*/}
                    <div className={s.login}>
                        {!isAuth ? <NavLink to={"/login"}>Login</NavLink> : "Logged in"}
                    </div>
                </div>
                {/*<div className={s.subheader}>*/}
                {/*    <a href='#'> Home</a>*/}
                {/*    <a href='#'> Friends</a>*/}
                {/*    <a href='#'> Messages</a>*/}
                {/*</div>*/}
            </div>
        </div>
    )
}

export default Header;

const heart = <FontAwesomeIcon icon={faHeart}/>
const bell = <FontAwesomeIcon icon={faBell}/>
const mail = <FontAwesomeIcon icon={faEnvelope}/>