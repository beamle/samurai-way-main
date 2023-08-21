import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import {SidebarContainer} from "./Sidebar/SidebarContainer";

const setActive = (link: { isActive: boolean, isPending: boolean }) => link.isActive ? s.active : "";


const Navbar = () => {
    return (

        <nav className={s.nav}>
            <div className={s.nav_items}>
                <div className={s.nav_item}>
                    <NavLink to="/profile" className={setActive}>🤖 Profile </NavLink>
                </div>
                <div className={s.nav_item}>
                    <NavLink to="/dialogs" className={setActive}>📪 Messages</NavLink>
                </div>
                <div className={s.nav_item}>
                    <NavLink to="/news>" className={setActive}>📪 News</NavLink>
                </div>
                <div className={s.nav_item}>
                    <NavLink to="/music" className={setActive}>📪 Music</NavLink>
                </div>
                <div className={s.nav_item}>
                    <NavLink to="/settings" className={setActive}>📪 Settings</NavLink>
                </div>
                <div className={s.nav_item}>
                    <NavLink to="/users" className={setActive}>📪 Find friends</NavLink>
                </div>
            </div>
            <div className={s.sidebar}><SidebarContainer/></div>
        </nav>

    );
};


export default Navbar;