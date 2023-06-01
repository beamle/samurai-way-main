import React from 'react';
import s from "./Dialogs.module.css";
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";

type DialogsPropsType = {
    dialogsData: {
        id: string
        name: string
    }[]
    messagesData: {
        id: number
        message: string
    }[]
}


const Dialogs = (props: DialogsPropsType) => {
    const {dialogsData, messagesData} = props;

    let showDialogs = dialogsData
        .map(dialog => <Dialog id={dialog.id} title={dialog.name}/>);
    let showMessages = messagesData
        .map(message => <Message id={message.id} message={message.message}/>);

    return (
        <div className={s.dialogsContainer}>
            <div className={s.dialogs}>
                {showDialogs}
            </div>
            <div className={s.messages}>
                {showMessages}
            </div>
        </div>
    );
};

export default Dialogs;