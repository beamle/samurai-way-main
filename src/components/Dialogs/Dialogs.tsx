import React, {ChangeEvent, EventHandler, useRef} from 'react';
import s from "./Dialogs.module.css";
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import {ActionsType, addMessageAC, addMessageCharAC} from "../../redux/state";
import MyInput from "../common/MyInput/MyInput";

type DialogsPropsType = {
    dialogsData: {
        id: string
        name: string
    }[]
    messagesData: {
        id: string
        message: string
    }[]
    dispatch: (action: ActionsType) => void
    newMessageText: string
}


const Dialogs = (props: DialogsPropsType) => {
    const {dialogsData, messagesData, newMessageText, dispatch} = props;

    const showDialogs = dialogsData.map(dialog => <Dialog id={dialog.id} title={dialog.name}/>);
    const showMessages = messagesData.map(message => <Message id={message.id} message={message.message}/>);
    const messageRef = useRef<HTMLInputElement>(null)
    const addMessageCharacter = (e: ChangeEvent<HTMLInputElement>) => dispatch(addMessageCharAC(e.currentTarget.value))
    const addMessage = () => {
        if (messageRef.current !== null) {
            dispatch(addMessageAC(messageRef.current.value))
        }
    }

    return (
        <div className={s.dialogsContainer}>
            <div className={s.dialogs}>{showDialogs}</div>
            <div className={s.messages}>
                {showMessages}
                <MyInput ref={messageRef} type="text" onChangeCallback={addMessageCharacter} value={newMessageText}></MyInput>
                <button onClick={addMessage}>add</button>
            </div>
        </div>
    );
};

export default Dialogs;