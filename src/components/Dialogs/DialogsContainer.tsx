import React, {ChangeEvent, useRef} from 'react';
import {StoreType} from "../../redux/redux-store";
import Dialogs from "./Dialogs";
import {addMessageAC, addMessageCharAC} from "../../store/dialogs/dialogs.reducer";
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";

type DialogsContainerType = {
    store: StoreType
}

const DialogsContainer = (props: DialogsContainerType) => {

    const {dialogsData, messagesData, newMessageText} = props.store.getState().dialogsPage;
    const {dispatch} = props.store

    const messageRef = useRef<HTMLInputElement>(null)

    const addMessageCharacter = (char: string) => dispatch(addMessageCharAC(char))

    const addMessage = (message: string) => {
        if (message !== null) {
            dispatch(addMessageAC(message))
        }
    }



    return (
        <Dialogs dialogsData={dialogsData} messagesData={messagesData}
                 newMessageText={newMessageText} addMessage={addMessage}
                 addMessageCharacter={addMessageCharacter}/>
    );
};

export default DialogsContainer;