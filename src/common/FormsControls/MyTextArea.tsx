import React from 'react';
import s from "./MyTextArea.module.css";

export const MyTextArea = ({input, meta, ...props}: any) => {

    const hasError = meta.touched && meta.error
    return (
        <div className={s.myTextarea + " " + (hasError ? s.error : '')}>
            <div>
                <textarea {...input} {...props}/>
            </div>
            {hasError && <span>{meta.error}</span> }
        </div>
    );
};
