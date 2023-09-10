import React, {ChangeEvent, useRef} from 'react';
import {StateType, StoreType} from "../../redux/redux-store";
import Dialogs from "./Dialogs";
import {addMessage, addMessageChar, DialogsPageType} from "../../store/dialogs/dialogs.reducer";
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import {connect} from "react-redux";
import {compose, Dispatch} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";


//types
type MapStatePropsType = {
    dialogsPage: DialogsPageType
}

type MapDispatchToPropsType = {
    addMessageChar: (char: string) => void
    addMessage: (message: string) => void
}

export type DialogsPropsType = MapDispatchToPropsType & MapStatePropsType

//MSP & MDP
const mapStateToProps = (state: StateType): MapStatePropsType => {
    return {
        dialogsPage: state.dialogsPage
    }
}

export default compose<() => JSX.Element>(
    connect(mapStateToProps, {addMessageChar, addMessage}),
    withAuthRedirect)(Dialogs);


//same as ->
// let AuthRedirectComponent = withAuthRedirect(Dialogs)
//
// const DialogsContainer = connect(mapStateToProps, {
//     addMessageChar,
//     addMessage})(AuthRedirectComponent)
