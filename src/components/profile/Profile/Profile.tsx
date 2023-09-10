import React, {ChangeEvent} from 'react';
import MyPosts from "../MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import s from "./Profile.module.css";
import {addChar, addPost} from "../../../store/profile/profile-reducer";
import MyPostsContainer from "../MyPosts/MyPostsContainer";
import {ActionsType} from "../../../trash/store";
import store, {StoreType} from "../../../redux/redux-store";
import {ProfileContainerPropsType} from "../ProfileContainer/ProfileContainer";

type ProfilePropsType = ProfileContainerPropsType

const Profile = (props: ProfilePropsType) => {
    return (
        <div className={s.profile}>
            <ProfileInfo userProfileInfo={props.userProfileInfo}
                         getUserStatusTC={props.getUserStatusTC}
                         updateUserStatusTC={props.updateUserStatusTC}/>
            <MyPostsContainer/>

        </div>
    );
};

export default Profile;