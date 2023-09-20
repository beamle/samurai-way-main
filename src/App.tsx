import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {Route, Routes} from "react-router-dom";
import {StoreType} from "./redux/redux-store";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/profile/ProfileContainer/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer/HeaderContainer";
import Login from "./components/Login/Login";


function App() {


    return <div className="App">
        <div className='app-wrapper'>
            {/*<Exercise/>*/}
            <HeaderContainer/>
            <Navbar/>
            <div className="app-wrapper-content">
                <Routes>
                    <Route path="/dialogs/" element={<DialogsContainer/>}/>
                    <Route path="/profile/:userId?" element={<ProfileContainer/>}/>
                    <Route path="/users" element={<UsersContainer/>}/>
                    <Route path="/login" element={<Login/>}/>
                </Routes>
            </div>
        </div>
    </div>
}


export default App;
