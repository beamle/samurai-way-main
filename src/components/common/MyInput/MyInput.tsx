import React, {ChangeEvent, RefObject} from 'react';

type MyInputPropsType = {
    type: string
    onChangeCallback: (e: ChangeEvent<HTMLInputElement>) => void
    value: string
}

const MyInput = React.forwardRef<HTMLInputElement, MyInputPropsType>(({type, onChangeCallback, value}, ref) => {
    return (
        <div>
            <input ref={ref} type={type} onChange={onChangeCallback} value={value}></input>
            </div>
    );
});

export default MyInput;

//React.forwardRef allows it to receive a ref prop and pass it down to the input