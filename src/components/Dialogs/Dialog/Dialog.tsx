import React from 'react';
import s from "./Dialog.module.css";
import {NavLink} from "react-router-dom";

type DialogPropsType = {
    id: string
    title: string
}

const Dialog = (props: DialogPropsType) => {
    const {title, id} = props;


    return (
        <NavLink to={`${/dialogs/}${id}`}>
            <div className={s.dialog}>
                <div className={s.dialog_title}>{title}</div>
                <div className={s.dialog_img}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSUJzhmXVKbmH2aSxmiJ3iNYe2NrdFFz-BAbMt1kqX95mBzE5Fzx1lu-Q2uAaB3CnCPI8&usqp=CAU" alt="empty"/></div>
                <div className={s.dialog_lm_time}></div>
            </div>
        </NavLink>
    );
};

export default Dialog;