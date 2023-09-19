import React from 'react';
import {StateType} from "../../redux/redux-store";
import Dialogs from "./Dialogs";
import {addMessage, DialogsPageType} from "../../store/dialogs/dialogs.reducer";
import {connect} from "react-redux";
import {compose} from "redux";
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
    connect(mapStateToProps, {addMessage}),
    withAuthRedirect)(Dialogs);


//same as ->
// let AuthRedirectComponent = withAuthRedirect(Dialogs)
//
// const DialogsContainer = connect(mapStateToProps, {
//     addMessageChar,
//     addMessage})(AuthRedirectComponent)
