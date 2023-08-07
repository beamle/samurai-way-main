import React, {ChangeEvent} from 'react';
import MyPosts from "../MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import s from "./Profile.module.css";
import {addCharAC, addPostAC} from "../../../store/profile/profile.reducer";
import MyPostsContainer from "../MyPosts/MyPostsContainer";
import {ActionsType} from "../../../redux/store";
import store, {StoreType} from "../../../redux/redux-store";

const Profile = () => {
    return (
        <div className={s.profile}>
            <ProfileInfo/>
            <MyPostsContainer/>

        </div>
    );
};

export default Profile;