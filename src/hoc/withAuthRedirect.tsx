import React, {ComponentType, FunctionComponent} from "react";
import {Navigate} from "react-router-dom";
import {DialogsPropsType} from "../components/Dialogs/DialogsContainer";
import {connect} from "react-redux";
import {StateType} from "../redux/redux-store";

type MSTPType = {
    isAuth: boolean
}

const mapStateToProps = (state:StateType):MSTPType => {
   return {
       isAuth: state.auth.isAuth
   }
}

export function withAuthRedirect<T>(Component: any) {

    function RedirectComponent(props:MSTPType){

        const {isAuth, ...restProps} = props
        console.log(Component)


        if (!props.isAuth) return <Navigate to={"/login"}></Navigate>

        return <Component {...restProps as T } />
    }


    return connect(mapStateToProps)(RedirectComponent)
}