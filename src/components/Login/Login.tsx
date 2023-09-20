import React from 'react';
import {FormDataType, LoginReduxForm} from "./LoginForm/LoginForm";
import {connect} from "react-redux";
import {AuthReducerType, loginTC, logoutTC} from "../../auth/auth-reducer";
import {StateType} from "../../redux/redux-store";
import {Navigate} from "react-router-dom";

const mapStateToProps = (state: StateType): MapStatePropsType => {
    return {
        auth: state.auth
    }
}


const Login = (props: LogingProptsType) => {
    const onSubmit = (formData: FormDataType) => {
        props.loginTC(formData.email, formData.password, formData.rememberMe)
    }

    if (props.auth.isAuth) {
        return <Navigate to={"/profile"}/>
    }

    return (
        <div>
            Login page
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
};

export default connect(mapStateToProps, {loginTC, logoutTC})(Login);



type MapStatePropsType = {
    auth: AuthReducerType
}
type MapDispatchToPropsType = {
    loginTC: (email: string, password: string, rememberMe: boolean) => void
    logoutTC: () => void
}
type LogingProptsType = MapDispatchToPropsType & MapStatePropsType