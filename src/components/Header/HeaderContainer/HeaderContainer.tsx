import React from "react";
import axios from "axios";
import Header from "../Header";
import {setUserAuthData, UserDataType} from "../../../auth/auth-reducer";
import {connect} from "react-redux";
import {StateType} from "../../../redux/redux-store";
const settings = {
    withCredentials: true
}

class HeaderContainer extends React.Component<HeaderContainerPropsType> {

    componentDidMount() {
        const {setUserAuthData} = this.props
        axios.get("https://social-network.samuraijs.com/api/1.0/auth/me", settings)
            .then(res => {
                if(res.data.resultCode === 0) setUserAuthData(res.data.data)
            })
    }

    render() {
        const {isAuth} = this.props
        return <Header isAuth={isAuth} /> ;
    }
}

const mapStateToProps = (state: StateType): MapStateToPropsType => {
    return {
        isAuth: state.auth
    }
}
export default connect(mapStateToProps, {setUserAuthData})(HeaderContainer)


type MapStateToPropsType = {
    // TODO: // isAuth: boolean
}
type MapDispatchToPropsType = {
    setUserAuthData: (userData: UserDataType) => void
}
type HeaderContainerPropsType = MapStateToPropsType & MapDispatchToPropsType