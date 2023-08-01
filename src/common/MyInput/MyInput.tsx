import React, {ChangeEvent, RefObject} from 'react';

type MyInputPropsType = {
    type: string
    onChangeCallback: (e: ChangeEvent<HTMLInputElement>) => void
    value: string
}

const MyInput = React.forwardRef<HTMLInputElement, MyInputPropsType>(({type, onChangeCallback, value}, ref) => {

    // const {type, onChangeCallback, value} = props;
    return (
        <div>
            <input ref={ref} type={type} onChange={onChangeCallback} value={value}></input>
            </div>
    );
});

export default MyInput;

//React.forwardRef allows it to receive a ref prop and pass it down to the input
// the structure of typization of forwardRef is similar as <React.FC <MyINputPropsType> ({type....}) => {}
// The props object is always the first due to historical decision, why HtmlIUnputElement have to be first i didn't understand