import React from 'react';
import sunset from "../../assets/sunset.jpg";
import s from "./MainContent.module.css";

const MainContent = () => {
    return (
            <div className={s.main_content}>
                <img src={sunset} alt="sunset"/>
            </div>
    );
};

export default MainContent;