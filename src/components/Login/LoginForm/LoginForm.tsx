import React, {FC} from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {requiredField} from "../../../utils/validators/validators";
import {MyFormInput} from "../../../common/FormsControls/FormControls";
import s from "./../../../common/FormsControls/FormControls.module.css"


export type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
}

const LoginForm: FC<InjectedFormProps<FormDataType>> = (props: any) => {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field placeholder="email" name="email" component={MyFormInput} elementType="input" validate={[requiredField]}/>
                </div>
                <div>
                    <Field placeholder="password" name="password" component={MyFormInput} elementType="input" type="password" validate={[requiredField]}/>
                </div>
                <div>
                    <label>
                        <Field name="rememberMe" type="checkbox" component={MyFormInput} elementType="input" />
                        Agree
                    </label>
                </div>
                <div className={s.formSummaryError}>{props.error}</div>
                <button>Login</button>
            </form>
        </div>
    );
};

export const LoginReduxForm = reduxForm<FormDataType>({
    form: 'login'
})(LoginForm)