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
    login: string | null
    logoutTC: () => void
    // setUserAuthData: (userData: UserDataType) => void
}

const Header = ({isAuth, login, logoutTC}: HeaderPropsType) =>{
    return (
        <div className={s.header}>

            <div className={s.headerContainer}>
                <div className={s.topheader}>
                    <div className={s.logoWrapper}>
                        <p className={s.logo}>BetterThanFacebookAnyways</p>
                    </div>
                    <div className={s.login}>
                        {!isAuth ? <NavLink to={"/login"}>Login</NavLink> : <div>{login} <button onClick={logoutTC}> logout</button></div>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;

const heart = <FontAwesomeIcon icon={faHeart}/>
const bell = <FontAwesomeIcon icon={faBell}/>
const mail = <FontAwesomeIcon icon={faEnvelope}/>