import React from "react";
import Header from "../Header";
import {logoutTC} from "../../../auth/auth-reducer";
import {connect} from "react-redux";
import {StateType} from "../../../redux/redux-store";


class HeaderContainer extends React.Component<HeaderContainerPropsType> {

    render() {
        const {isAuth, login, logoutTC} = this.props
        return <Header isAuth={isAuth} login={login} logoutTC={logoutTC}/> ;
    }
}

const mapStateToProps = (state: StateType): MapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}
export default connect(mapStateToProps, {
    logoutTC: logoutTC
})(HeaderContainer)


type MapStateToPropsType = {
    isAuth: boolean
    login: string | null
}
type MapDispatchToPropsType = {
    logoutTC: () => void
}
export type HeaderContainerPropsType = MapStateToPropsType & MapDispatchToPropsType