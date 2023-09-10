import React from 'react';
import s from "./ProfileInfo.module.css";
import {UserProfileInfoType} from "../../../../store/profile/profile-reducer";
import Preloader from "../../../../common/Preloader/Preloader";
import ProfileStatus from "../../ProfileStatus/ProfileStatus";

type ProfileInfoPropsType = {
    userProfileInfo: UserProfileInfoType
    getUserStatusTC: (userId: string) => void
    updateUserStatusTC: (status: string) => void
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
            <ProfileStatus getUserStatusTC={props.getUserStatusTC}
                           updateUserStatusTC={props.updateUserStatusTC} />
        </div>
    );
};

export default ProfileInfo;