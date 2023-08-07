import React, {ChangeEvent, EventHandler, useRef} from 'react';
import s from "./Dialogs.module.css";
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import MyInput from "../../common/MyInput/MyInput";
import {addMessageAC, addMessageCharAC} from "../../store/dialogs/dialogs.reducer";
import {StoreType} from "../../redux/redux-store";
import {DialogsPropsType} from "./DialogsContainer";

// type DialogsPropsType = {
//     dialogsData: DialogsDataType
//     messagesData: MessagesDataType
//     newMessageText: string
//     addMessage: (message: string) => void
//     addMessageCharacter: (char:string) => void
// }


const Dialogs = (props: DialogsPropsType) => {
    const {dialogsData, messagesData, newMessageText} = props.dialogsPage
    const {addMessageCharacter, addMessage} = props

    const messageRef = useRef<HTMLInputElement>(null)
    const addMessageChar = (e: ChangeEvent<HTMLInputElement>) => props.addMessageCharacter(e.currentTarget.value)
    const addMessageItself = () => {
        if (messageRef.current !== null) {
            props.addMessage(messageRef.current.value)
        }
    }


    const showDialogs = dialogsData.map(dialog => <Dialog id={dialog.id} title={dialog.name}/>);
    const showMessages = messagesData.map(message => <Message id={message.id} message={message.message}/>);

    return (
        <div className={s.dialogsContainer}>
            <div className={s.dialogs}>{showDialogs}</div>
            <div className={s.messages}>
                {showMessages}
                <MyInput ref={messageRef} type="text" onChangeCallback={addMessageChar} value={newMessageText}></MyInput>
                <button onClick={addMessageItself}>add</button>
            </div>
        </div>
    );
};

export default Dialogs;