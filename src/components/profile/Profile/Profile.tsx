import React from 'react';
import MyPosts from "../MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import s from "./Profile.module.css";
import {ActionsType} from "../../../redux/state";

export type ProfilePropsType = {
    postData: {
        id: number
        message: string
        like: number
    }[]
    newPostText: string
    addPostToState: (postText: string) => void
    addCharToState: (character: string) => void
    dispatch: (action: ActionsType) => void
}

const Profile = (props: ProfilePropsType) => {
    const {postData, newPostText, dispatch} = props;

    return (
        <div className={s.profile}>
            <ProfileInfo/>
            <MyPosts postData={postData}
                     addPostToState={props.addPostToState}
                     addCharToState={props.addCharToState}
                     newPostText={newPostText}
                     dispatch={dispatch}/>
        </div>
    );
};

export default Profile;