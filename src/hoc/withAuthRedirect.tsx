import React, {ComponentType, FunctionComponent} from "react";
import {Navigate} from "react-router-dom";
import {DialogsPropsType} from "../components/Dialogs/DialogsContainer";
import {connect} from "react-redux";
import {StateType} from "../redux/redux-store";

type mapStateToPropsType = {
    isAuth: boolean
}

const mapStateToProps = (state:StateType):mapStateToPropsType => {
   return {
       isAuth: state.auth.isAuth
   }
}

export function withAuthRedirect<T>(Component: any) {

    function RedirectComponent(props:mapStateToPropsType){

        const {isAuth, ...restProps} = props
        console.log(Component)


        if (!props.isAuth) return <Navigate to={"/login"}></Navigate>

        return <Component {...restProps as T } />
    }


    return connect(mapStateToProps)(RedirectComponent)
}