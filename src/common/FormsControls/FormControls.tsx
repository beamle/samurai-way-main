import React from 'react';
import s from "./FormControls.module.css";


const FormControl = ({ input, meta: {touched, error}, elementType, children, ...props }: any) => {
    const hasError = touched && error;

    return (
        <div className={s.myTextarea + " " + (hasError ? s.error : '')}>
            <div>
                {React.createElement(elementType, { ...input, ...props} )}
            </div>
            {hasError && <span>{error}</span>}
        </div>
    );
};


export const MyTextArea = (props: any) => {
    return <FormControl {...props} elementType="textarea" />;
};

export const MyFormInput = (props: any) => {
    return <FormControl {...props} elementType="input" />;
};


// export const Element = (Element: any) => ({ input, meta, ...props }: any) => {
//     const hasError = meta.touched && meta.error;
//     return (
//         <div className={ s.formControl + " " + (hasError ? s.error : "") }>
//             <Element {...input} {...props} />
//             { hasError && <span> { meta.error } </span> }
//         </div>
//     );
// };
