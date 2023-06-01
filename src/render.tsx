import ReactDOM from "react-dom";
import App from "./App";
import React from "react";
import {StateType} from "./redux/state";


export let rerenderEntireTree = (state: StateType) => {//{state: StateType}
    ReactDOM.render(
        <App state={state}/>,
        document.getElementById('root')
    );
}
