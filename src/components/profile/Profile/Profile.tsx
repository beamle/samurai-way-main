import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import s from "./Profile.module.css";
import {getUserStatusTC} from "../../../store/profile/profile-reducer";
import MyPostsContainer from "../MyPosts/MyPostsContainer";
import {ProfileContainerPropsType} from "../ProfileContainer/ProfileContainer";

type ProfilePropsType = ProfileContainerPropsType

const Profile = (props: ProfilePropsType) => {
    return (
        <div className={s.profile}>
            <ProfileInfo userProfileInfo={props.userProfileInfo}
                         status={props.status}
                         updateUserStatusTC={props.updateUserStatusTC}
                         getUserStatusTC={getUserStatusTC}/>
            <MyPostsContainer/>

        </div>
    );
};

export default Profile;