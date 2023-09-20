import React, {FC} from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {requiredField} from "../../../utils/validators/validators";
import {MyFormInput} from "../../../common/FormsControls/FormControls";


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
                    <Field placeholder="login" name="login" component={MyFormInput} elementType="input" validate={[requiredField]}/>
                </div>
                <div>
                    <Field placeholder="password" name="password" component={MyFormInput} elementType="input" validate={[requiredField]}/>
                </div>
                <div>
                    <label>
                        <Field name="rememberMe" type="checkbox" component={MyFormInput} elementType="input" />
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