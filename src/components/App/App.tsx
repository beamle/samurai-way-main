import React from 'react';
import './App.css';
import Navbar from '../Navbar/Navbar';
import {Route, Routes} from "react-router-dom";
import {StateType, StoreType} from "../../redux/redux-store";
import DialogsContainer from "../Dialogs/DialogsContainer";
import UsersContainer from "../Users/UsersContainer";
import ProfileContainer from "../profile/ProfileContainer/ProfileContainer";
import HeaderContainer from "../Header/HeaderContainer/HeaderContainer";
import Login from "../Login/Login";
import {getUserAuthTC} from "../../auth/auth-reducer";
import {connect} from "react-redux";
import {AppType, initializeAppTC} from "./app-reducer";
import Preloader from "../../common/Preloader/Preloader";


class App extends React.Component<AppPropsType> {
    componentDidMount() {
        this.props.initializeAppTC();
    }

    render() {
        const {isInitialized} = this.props;
        if (!isInitialized) {
            return <Preloader isFetching={true}/>
        }
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
}


const mapStateToProps = (state: StateType): MapStateToPropsType => ({
    isInitialized: state.app.isInitialized
})

export default connect(mapStateToProps, {getUserAuthTC, initializeAppTC})(App);

type AppPropsType = MapDispatchToPropsType & MapStateToPropsType
type MapDispatchToPropsType = {
    getUserAuthTC: () => void
    initializeAppTC: () => void
}
type MapStateToPropsType = {
    isInitialized: boolean
}