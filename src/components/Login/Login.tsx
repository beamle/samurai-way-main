import React from 'react';
import {FormDataType, LoginReduxForm} from "./LoginForm/LoginForm";

const Login = () => {
    const onSubmit = (formData: FormDataType) => {
        console.log(formData)
    }

    return (
        <div>
            Login page
            <LoginReduxForm onSubmit={onSubmit}/>
            </div>
    );
};

export default Login;