import React from 'react';
import './index.css';
import ReactDOM from "react-dom";
import App from "./components/App/App";
import store from './redux/redux-store';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";

// let rerenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <App/>
            </Provider>
        </BrowserRouter>,
        document.getElementById('root')
    );
// }
//
// rerenderEntireTree()
// store.subscribe(() => {
//     let state = store.getState();
//     rerenderEntireTree();
// })

