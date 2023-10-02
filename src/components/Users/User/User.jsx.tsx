import React from "react";
import s from "./User.module.css";
import {NavLink} from "react-router-dom";
import {ANONYMOUS_PIC} from "../../../assets/pictures/picturesUrl";
import {UserType} from "../../../store/users/users-reducer";

const User = ({user, followInProgress, unFollowUserTC, followUserTC}: UsersFCPropsType) => {

    const unFollowUser = () => {
        unFollowUserTC(user.id)
    }
    const followUser = () => {
        followUserTC(user.id)
    }

    return <div key={user.id}>
        {user.name}
        {user.followed

            ? <button onClick={unFollowUser} disabled={followInProgress.some(id => id === user.id)}>Unfollow</button>
            : <button onClick={followUser} disabled={followInProgress.some(id => id === user.id)}>Follow</button>}

        <div className={s.avatar}>
            <NavLink to={`/profile/${user.id}`}>
                <img src={user.photos.small ? user.photos.small : ANONYMOUS_PIC} alt={"avatar"}></img>
            </NavLink>
        </div>
        <div>{user.status}</div>
    </div>

}

export default User;

type UsersFCPropsType = {
    user: UserType
    usersPart: UserType[]
    followInProgress: string[]
    unFollowUserTC: (userId: string) => void
    followUserTC: (userId: string) => void
}
