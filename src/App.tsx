import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from './components/Navbar/Navbar';
import Dialogs from "./components/Dialogs/Dialogs";
import Profile from "./components/profile/Profile/Profile";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import store, {StoreType} from "./redux/redux-store";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import Users from './components/Users/Users.jsx';
import UsersContainer from "./components/Users/UsersContainer";

type AppPropsType = {
    store: StoreType
}
type PersonType = {
    name: string
    age: number
}
function App() {
    const {postData, newPostText} = store.getState().profilePage;
    // const {dialogsData, messagesData, newMessageText} = store.getState().dialogsPage;
    // const {sidebarData} = store.getState().sidebarData;
    // console.log(messagesData)





    return <div className="App">
        <div className='app-wrapper'>
            {/*<Exercise/>*/}
            <Header/>
            <Navbar/>
            <div className="app-wrapper-content">
                <Routes>
                    <Route path="/dialogs/*" element={<DialogsContainer/>}/>
                    <Route path="/profile" element={<Profile/>}/>
                    <Route path="/users" element={<UsersContainer/>}/>
                    {/*<MainContent/>*/}
                    {/*<Footer/>*/}
                </Routes>
            </div>
        </div>
    </div>
}


export default App;
