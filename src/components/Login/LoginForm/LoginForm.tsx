import React, {FC} from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";


export type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
}

const LoginForm: FC<InjectedFormProps<FormDataType>> = (props: any) => {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field placeholder="login" name="login" component="input"/>
                </div>
                <div>
                    <Field placeholder="password" name="password" component="input"/>
                </div>
                <div>
                    <label>
                        <Field component="input" name="rememberMe" type="checkbox" />
                        Agree
                    </label>
                </div>
                <button>Login</button>
            </form>
        </div>
    );
};

export const LoginReduxForm = reduxForm<FormDataType>({
    form: 'login'
})(LoginForm)