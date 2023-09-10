import React from 'react';
import s from "./ProfileInfo.module.css";
import {getUserStatusTC, UserProfileInfoType} from "../../../../store/profile/profile-reducer";
import Preloader from "../../../../common/Preloader/Preloader";
import ProfileStatus from "../../ProfileStatus/ProfileStatus";

type ProfileInfoPropsType = {
    userProfileInfo: UserProfileInfoType
    status: string
    updateUserStatusTC: (status: string) => void
    getUserStatusTC: (userId: number) => void
}

const ProfileInfo = (props: ProfileInfoPropsType) => {
    const {userId, fullName, contacts, lookingForAJob, photos} = props.userProfileInfo
    return (
        <div className={s.profileInfo}>
            Profile info
            id: {userId}
            fb: {contacts.facebook}
            {photos.small ? <img src={photos.small} alt={"pic"}/> : null}
            name: {fullName}
            lookinfforjob: {lookingForAJob}
            <ProfileStatus status={props.status}
                           updateUserStatusTC={props.updateUserStatusTC}
                           userId={userId}/>
        </div>
    );
};

export default ProfileInfo;