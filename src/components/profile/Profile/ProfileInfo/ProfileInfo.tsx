import React from 'react';
import s from "./ProfileInfo.module.css";
import {UserProfileInfoType} from "../../../../store/profile/profile-reducer";
import Preloader from "../../../../common/Preloader/Preloader";

type ProfileInfoPropsType = {
    userProfileInfo: UserProfileInfoType
}

const ProfileInfo = (props: ProfileInfoPropsType) => {
    const {userId, fullName, contacts, lookingForAJob, lookingForAJobDescription, photos} = props.userProfileInfo
    // if (props.userProfileInfo.photos.small !== "22" ) return <Preloader isFetching={true}/>
    return (
        <div className={s.profileInfo}>
            Profile info
            id: {userId}
            fb: {contacts.facebook}
            {photos.small ? <img src={photos.small} alt={"pic"}/> : null}
            name: {fullName}
            lookinfforjob: {lookingForAJob}
        </div>
    );
};

export default ProfileInfo;