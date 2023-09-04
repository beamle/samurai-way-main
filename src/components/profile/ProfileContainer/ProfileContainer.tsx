import React from 'react';
import s from "../Profile/Profile.module.css";
import {StateType} from "../../../redux/redux-store";
import Profile from "../Profile/Profile";
import {getUserProfileTC, UserProfileInfoType} from "../../../store/profile/profile-reducer";
import {connect} from "react-redux";
import {Navigate, Params, useParams} from 'react-router-dom';
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";
import Dialogs from "../../Dialogs/Dialogs";


class ProfileContainer extends React.Component<ProfileContainerPropsType> {
    componentDidMount() {
        const {getUserProfileTC, isAuth} = this.props
        let userId = this.props.params?.userId
        if (!userId) {
            userId = '2'
        }
        getUserProfileTC(userId)
    }

    render() {
        return (
            <div className={s.profile}>
                <Profile {...this.props}/>
            </div>)
    }
}

const mapStateToProps = (state: StateType): MapPropToStateType => ({
    userProfileInfo: state.profilePage.userProfileInfo,
    isAuth: state.auth.isAuth
})

const WithUrlDataContainerComponent = (props: ProfileContainerPropsType) => {
    return <ProfileContainer {...props} params={useParams<{ stringId: string }>()}/>
}

let AuthRedirectComponent = withAuthRedirect(WithUrlDataContainerComponent)

export default connect(mapStateToProps, {
    getUserProfileTC
})(AuthRedirectComponent)


type MapPropToStateType = {
    userProfileInfo: UserProfileInfoType
    isAuth: boolean
}
type MapStateToDispatchType = {
    // setUserProfileInfo: (userInfo: UserProfileInfoType) => void
    getUserProfileTC: (userId: string) => void
}
type RouterType = {
    params?: Params
}
export type ProfileContainerPropsType = MapPropToStateType & MapStateToDispatchType & RouterType
