import React from 'react';
import sunset from "../../pictures/sunset.jpg";
import s from "./MainContent.module.css";
import Profile from "../profile/Profile/Profile";
import Dialogs from '../Dialogs/Dialogs';

const MainContent = () => {
    return (
            <div className={s.main_content}>
                <img src={sunset} alt="sunset"/>
            </div>
    );
};

export default MainContent;