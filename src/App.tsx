import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from './components/Navbar/Navbar';
import Dialogs from "./components/Dialogs/Dialogs";
import Profile from "./components/profile/Profile/Profile";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import store, {StoreType} from "./redux/state";

type AppPropsType = {
    store: StoreType
}

function App(props: AppPropsType) {
    //state
    const {postData, newPostText} = props.store._state.profilePage;
    const {dialogsData, messagesData, newMessageText} = props.store._state.dialogsPage;
    const {sidebarData} = props.store._state;

    return (
        <BrowserRouter>
            <div className="App">
                <div className='app-wrapper'>
                    {/*<Exercise/>*/}
                    <Header/>
                    <Navbar sidebarData={sidebarData}/>
                    <div className="app-wrapper-content">
                        <Routes>
                            <Route path="/dialogs/*" element={<Dialogs dialogsData={dialogsData}
                                                                       messagesData={messagesData}
                                                                       newMessageText={newMessageText}
                                                                       dispatch={store.dispatch.bind(store)}/>}/>
                            <Route path="/profile" element={<Profile postData={postData}
                                                                     newPostText={newPostText}
                                                                     dispatch={store.dispatch.bind(store)}/>}/>
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
