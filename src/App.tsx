import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from './components/Navbar/Navbar';
import Dialogs from "./components/Dialogs/Dialogs";
import Profile from "./components/profile/Profile/Profile";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import store, {StoreType} from "./redux/redux-store";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import Users from './trash/Users.js';
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/profile/ProfileContainer/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer/HeaderContainer";

type AppPropsType = {
    store: StoreType
}
type PersonType = {
    name: string
    age: number
}
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
                    {/*<MainContent/>*/}
                    {/*<Footer/>*/}
                </Routes>
            </div>
        </div>
    </div>
}


export default App;
