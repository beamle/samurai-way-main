import React from 'react';
import s from "./Message.module.css";

type MessagePropsType = {
    id: string
    message: string
}

const Message = (props: MessagePropsType) => {
    const {message} = props;
    return (
        <div className={s.message}>
            <div className={s.userImg}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSUJzhmXVKbmH2aSxmiJ3iNYe2NrdFFz-BAbMt1kqX95mBzE5Fzx1lu-Q2uAaB3CnCPI8&usqp=CAU" alt="empty"/></div>
            <div className={s.messageTextContainer}>
                <div className={s.messageText}>{message}</div>
                <div className={s.messageTime}>22:00</div>
            </div>
        </div>
    );
};

export default Message;