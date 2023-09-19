import React from 'react';
import s from "./Dialogs.module.css";
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import {DialogsPropsType} from "./DialogsContainer";
import {Field, reduxForm} from "redux-form";
import { MyTextArea } from '../../common/FormsControls/MyTextArea';
import {maxLengthCreator, requiredField} from "../../utils/validators/validators";

const maxLength15 = maxLengthCreator(100)

const Dialogs = (props: DialogsPropsType) => {
    const {dialogsData, messagesData} = props.dialogsPage

    const sendDialogMessage = (values: DialogMessageType ) => {
        props.addMessage(values.newMessageBody)
    }

    const showDialogs = dialogsData.map(dialog => <Dialog key={dialog.id} id={dialog.id} title={dialog.name}/>);
    const showMessages = messagesData.map(message => <Message key={message.id} id={message.id} message={message.message}/>);

    return (
        <div className={s.dialogsContainer}>
            <div className={s.dialogs}>{showDialogs}</div>
            <div className={s.messages}>
                {showMessages}
                <AddMessageForm onSubmit={sendDialogMessage} />
            </div>
        </div>
    );
};

export default Dialogs;



const NewMessageForm = (props: any) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={MyTextArea} validate={[requiredField, maxLength15]}
                       placeholder='Enter your message' name='newMessageBody'/>
                <button>add</button>
            </div>
        </form>
    )
}

const AddMessageForm = reduxForm<DialogMessageType>({
    form: 'dialog-add-message-form'
})(NewMessageForm)

type DialogMessageType = {
    newMessageBody: string
}