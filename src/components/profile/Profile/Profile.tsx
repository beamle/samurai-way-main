import React from 'react';
import MyPosts from "../MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import s from "./Profile.module.css";
import {ActionsType} from "../../../redux/state";

export type ProfilePropsType = {
    postData: {
        id: string
        message: string
        like: number
    }[]
    newPostText: string
    dispatch: (action: ActionsType) => void
}

const Profile = (props: ProfilePropsType) => {
    const {postData, newPostText, dispatch} = props;

    return (
        <div className={s.profile}>
            <ProfileInfo/>
            <MyPosts postData={postData}
                     newPostText={newPostText}
                     dispatch={dispatch}/>
        </div>
    );
};

export default Profile;