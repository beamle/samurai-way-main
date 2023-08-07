import React, {ChangeEvent, useRef} from 'react';
import {StateType, StoreType} from "../../redux/redux-store";
import Dialogs from "./Dialogs";
import {addMessageAC, addMessageCharAC, DialogsPageType} from "../../store/dialogs/dialogs.reducer";
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import {connect} from "react-redux";
import {Dispatch} from "redux";

//
// const DialogsContainer = () => {
//     const messageRef = useRef<HTMLInputElement>(null)
//     return <StoreContext.Consumer>{
//         (store) => {
//             const {dialogsData, messagesData, newMessageText} = store.getState().dialogsPage;
//             const {dispatch} = store
//
//             const addMessageCharacter = (char: string) => dispatch(addMessageCharAC(char))
//
//             const addMessage = (message: string) => {
//                 if (message !== null) {
//                     dispatch(addMessageAC(message))
//                 }
//             }
//             return (
//                 <Dialogs dialogsData={dialogsData} messagesData={messagesData}
//                          newMessageText={newMessageText} addMessage={addMessage}
//                          addMessageCharacter={addMessageCharacter}/>
//             )
//         }}
//     </StoreContext.Consumer>
//
// };

type MapStatePropsType = {
    dialogsPage: DialogsPageType
}

type MapDispatchToPropsType = {
    addMessageCharacter: (char: string) => void
    addMessage: (message: string) => void
}

export type DialogsPropsType = MapDispatchToPropsType & MapStatePropsType

const mapStateToProps = (state: StateType): MapStatePropsType => {
    return {
        dialogsPage: state.dialogsPage
    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        addMessageCharacter: (char: string) => dispatch(addMessageCharAC(char)),
        addMessage: (message: string) => {
            if (message !== null) {
                dispatch(addMessageAC(message))
            }
        }
    }
}

const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs)

export default DialogsContainer;