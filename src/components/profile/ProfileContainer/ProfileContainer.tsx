import React from 'react';
import s from "../Profile/Profile.module.css";
import axios from "axios";
import {StateType} from "../../../redux/redux-store";
import Profile from "../Profile/Profile";
import {setUserProfileInfo, UserProfileInfoType} from "../../../store/profile/profile-reducer";
import {connect} from "react-redux";
import {Params, useParams} from 'react-router-dom';

class ProfileContainer extends React.Component<ProfileContainerPropsType> {
    componentDidMount() {
        const {setUserProfileInfo} = this.props
        let userId = this.props.params?.userId
        if (!userId) {
            userId = '2'
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(res => {
                setUserProfileInfo(res.data)
            })

    }

    render() {
        return (
            <div className={s.profile}>
                <Profile {...this.props}/>
            </div>)
    }
}

const mapStateToProps = (state: StateType): MapPropToStateType => {
    return {
        userProfileInfo: state.profilePage.userProfileInfo
    }
}

const WithUrlDataContainerComponent = (props: ProfileContainerPropsType) => {
    return <ProfileContainer {...props} params={useParams<{ stringId: string }>()}/>
}

export default connect(mapStateToProps, {
    setUserProfileInfo
})(WithUrlDataContainerComponent)


type StringIdParams = {
    stringId: string;
};

type MapPropToStateType = {
    userProfileInfo: UserProfileInfoType
}
type MapStateToDispatchType = {
    setUserProfileInfo: (userInfo: UserProfileInfoType) => void
}
type RouterType = {
    params?: Params
}
export type ProfileContainerPropsType = MapPropToStateType & MapStateToDispatchType & RouterType
