import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import {SidebarContainer} from "./Sidebar/SidebarContainer";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUser} from "@fortawesome/free-regular-svg-icons/faUser";
import {faHeart} from "@fortawesome/free-regular-svg-icons/faHeart";
import {faEnvelope} from "@fortawesome/free-regular-svg-icons/faEnvelope";
import {faEdit} from "@fortawesome/free-regular-svg-icons";
import {faHandPeace} from "@fortawesome/free-regular-svg-icons";

const setActive = (link: { isActive: boolean, isPending: boolean }) => link.isActive ? s.active : "";

const profile = <FontAwesomeIcon icon={faUser}/>
const mail = <FontAwesomeIcon icon={faEnvelope}/>
const settings = <FontAwesomeIcon icon={faEdit} />
const friends = <FontAwesomeIcon icon={faHandPeace} />

const Navbar = () => {
    return (

        <nav className={s.nav}>
            <div className={s.nav_items}>
                <div className={s.nav_item}>
                    <NavLink to="/profile" className={setActive}>{profile} Profile </NavLink>
                </div>
                <div className={s.nav_item}>
                    <NavLink to="/dialogs" className={setActive}>{mail} Messages</NavLink>
                </div>
                {/*<div className={s.nav_item}>*/}
                {/*    <NavLink to="/news>" className={setActive}>📪 News</NavLink>*/}
                {/*</div>*/}
                {/*<div className={s.nav_item}>*/}
                {/*    <NavLink to="/music" className={setActive}>📪 Music</NavLink>*/}
                {/*</div>*/}
                <div className={s.nav_item}>
                    <NavLink to="/settings" className={setActive}>{settings} Settings</NavLink>
                </div>
                <div className={s.nav_item}>
                    <NavLink to="/users" className={setActive}>{friends} Find friends</NavLink>
                </div>
            </div>
            <div className={s.sidebar}><SidebarContainer/></div>
        </nav>

    );
};


export default Navbar;