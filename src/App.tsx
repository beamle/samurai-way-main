import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from './components/Navbar/Navbar';
import Dialogs from "./components/Dialogs/Dialogs";
import Profile from "./components/profile/Profile/Profile";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {addCharToState, state, StateType} from "./redux/state";
import {addPostToState} from "./redux/state";

type AppPropsType = {
    state: StateType
}

function App(props: AppPropsType) {
    const {postData, dialogsData, messagesData, sidebarData, charData} = props.state;

    return (
        <BrowserRouter>
            <div className="App">
                <div className='app-wrapper'>
                    <Header/>
                    <Navbar sidebarData={sidebarData} />
                    <div className="app-wrapper-content">
                        <Routes>
                            <Route path="/dialogs/*" element={<Dialogs dialogsData={dialogsData} messagesData={messagesData}/>}/>
                            <Route path="/profile" element={<Profile postData={postData} addPostToState={addPostToState} addCharToState={addCharToState} charData={charData}/>}/>
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
