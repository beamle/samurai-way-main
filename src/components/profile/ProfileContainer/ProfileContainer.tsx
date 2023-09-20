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
import {Params, useParams} from 'react-router-dom';
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";


class ProfileContainer extends React.Component<ProfileContainerPropsType> {
    componentDidMount() {
        const {getUserProfileTC, getUserStatusTC, updateUserStatusTC} = this.props
        let userId = this.props.userId
        getUserProfileTC(Number(userId))
        getUserStatusTC(Number(userId))
    }

    render() {
        return (
            <div className={s.profile}>
                <Profile {...this.props}
                         status={this.props.status}
                         updateUserStatusTC={this.props.updateUserStatusTC}
                         getUserStatusTC={this.props.getUserStatusTC}/>
            </div>)
    }
}

const mapStateToProps = (state: StateType): MapPropToStateType => ({
    userProfileInfo: state.profilePage.userProfileInfo,
    isAuth: state.auth.isAuth,
    status: state.profilePage.status,
    userId: state.auth.id
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
    status: string
    userId: string | null
}
type MapStateToDispatchType = {
    // setUserProfileInfo: (userInfo: UserProfileInfoType) => void
    getUserProfileTC: (userId: number) => void
    getUserStatusTC: (userId: number) => void
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