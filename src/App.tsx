import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from './components/Navbar/Navbar';
import Dialogs from "./components/Dialogs/Dialogs";
import Profile from "./components/profile/Profile/Profile";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import store, {StoreType} from "./redux/redux-store";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

type AppPropsType = {
    store: StoreType
}

function App(props: AppPropsType) {
    //state
    const {postData, newPostText} = props.store.getState().profilePage;
    const {dialogsData, messagesData, newMessageText} = props.store.getState().dialogsPage;
    const {sidebarData} = props.store.getState().sidebarData;
    console.log(messagesData)

    return (
        <BrowserRouter>
            <div className="App">
                <div className='app-wrapper'>
                    {/*<Exercise/>*/}
                    <Header/>
                    <Navbar sidebarData={sidebarData}/>
                    <div className="app-wrapper-content">
                        <Routes>
                            <Route path="/dialogs/*" element={<DialogsContainer store={props.store}/>}/>
                            <Route path="/profile" element={<Profile store={props.store}/>}/>
                            {/*<MainContent/>*/}
                            {/*<Footer/>*/}
                        </Routes>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
