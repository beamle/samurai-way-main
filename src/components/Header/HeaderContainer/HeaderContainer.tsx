import React from "react";
import axios from "axios";
import Header from "../Header";
import {setUserAuthData, getUserAuthTC, UserDataType} from "../../../auth/auth-reducer";
import {connect} from "react-redux";
import {StateType} from "../../../redux/redux-store";
import {headerAPI} from "../../../api/header-api";


class HeaderContainer extends React.Component<HeaderContainerPropsType> {
    componentDidMount() {
        const {setUserAuthTC} = this.props
        setUserAuthTC()
    }

    render() {
        const {isAuth} = this.props
        return <Header isAuth={isAuth} /> ;
    }
}

const mapStateToProps = (state: StateType): MapStateToPropsType => {
    return {isAuth: state.auth.isAuth}
}
export default connect(mapStateToProps, {setUserAuthTC: getUserAuthTC})(HeaderContainer)


type MapStateToPropsType = {
    isAuth: boolean
}
type MapDispatchToPropsType = {
    setUserAuthTC: () => void
}
export type HeaderContainerPropsType = MapStateToPropsType & MapDispatchToPropsType