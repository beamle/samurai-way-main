import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import {SidebarDataType} from "../../redux/store";
import Sidebar from "./Sidebar/Sidebar";

const setActive = (link: { isActive: boolean, isPending: boolean }) => link.isActive ? s.active : "";

type NavbarPropsType = {
    sidebarData: SidebarDataType
}

const Navbar = (props: NavbarPropsType) => {
    const {sidebarData} = props;

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
                    <NavLink to="/settings>" className={setActive}>📪 Settings</NavLink>
                </div>
            </div>
            <div className={s.sidebar}><Sidebar sidebarData={sidebarData}/></div>
        </nav>
    );
};

export default Navbar;