import React from 'react';
import MyPosts from "../MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import s from "./Profile.module.css";

type ProfilePropsType = {
    postData: {
        id: number
        message: string
        like: number
    }[]
    charData: string
    addPostToState: (postText: string) => void
    addCharToState: (character: string) => void
}

const Profile = (props: ProfilePropsType) => {
    const {postData, charData} = props;

    return (
        <div className={s.profile}>
            <ProfileInfo/>
            <MyPosts postData={postData} addPostToState={props.addPostToState} addCharToState={props.addCharToState} charData={charData}/>
        </div>
    );
};

export default Profile;