import React from 'react';
import s from "../Profile/Profile.module.css";
import {StateType} from "../../../redux/redux-store";
import Profile from "../Profile/Profile";
import {
    getUserProfileTC,
    getUserStatusTC,
    updateUserStatusTC,
    UserProfileInfoType
} from "../../../store/profile/profile-reducer";
import {connect} from "react-redux";
import {Navigate, Params, useParams} from 'react-router-dom';
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";
import Dialogs from "../../Dialogs/Dialogs";
import {compose} from "redux";


class ProfileContainer extends React.Component<ProfileContainerPropsType> {
    componentDidMount() {
        const {getUserProfileTC, getUserStatusTC, updateUserStatusTC} = this.props
        let userId = this.props.params?.userId
        if (!userId) {
            userId = '2'
        }
        getUserProfileTC(userId)
        getUserStatusTC(userId)
    }

    render() {
        return (
            <div className={s.profile}>
                <Profile {...this.props} getUserStatusTC={getUserStatusTC} updateUserStatusTC={updateUserStatusTC}/>
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
    getUserProfileTC,
    getUserStatusTC,
    updateUserStatusTC
})(AuthRedirectComponent)


type MapPropToStateType = {
    userProfileInfo: UserProfileInfoType
    isAuth: boolean
}
type MapStateToDispatchType = {
    // setUserProfileInfo: (userInfo: UserProfileInfoType) => void
    getUserProfileTC: (userId: string) => void
    getUserStatusTC: (userId: string) => void
    updateUserStatusTC: (status: string) => void
}
type RouterType = {
    params?: Params
}
export type ProfileContainerPropsType = MapPropToStateType & MapStateToDispatchType & RouterType
//
// export default compose<() => JSX.Element>(
//     connect(mapStateToProps, {getUserProfileTC}),
//     withAuthRedirect,
//     // WithUrlDataContainerComponent,
// )(ProfileContainer)