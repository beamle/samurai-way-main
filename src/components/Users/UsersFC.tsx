import React from "react";
import s from "./Users.module.css";
import {ANONYMOUS_PIC} from "../../assets/pictures/picturesUrl";
import {UserType} from "../../store/users/users-reducer";
import {NavLink} from "react-router-dom";

const UsersFC = ({followUserTC, unFollowUserTC, usersPart, pageSize, usersCount, currentPage, pageChange, followInProgress}: UsersFCPropsType) => {
    let pagesCount = Math.ceil(usersCount / pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div>
        {pages.map(page => <span key={page} onClick={() => pageChange(page)}
                                 className={page === currentPage ? s.selectedPage : ''}>{page}</span>)}
        {usersPart.map(el => {
            const unFollowUser = () => {
                unFollowUserTC(el.id)
            }
            const followUser = () => {
                followUserTC(el.id)
            }
            return <div key={el.id}>
                {el.name}
                {el.followed

                    ? <button onClick={unFollowUser} disabled={followInProgress.some(id => id === el.id)}>Unfollow</button>
                    : <button onClick={followUser}  disabled={followInProgress.some(id => id === el.id)}>Follow</button>}

                <div className={s.avatar}>
                    <NavLink to={`/profile/${el.id}`}>
                        <img src={el.photos.small ? el.photos.small : ANONYMOUS_PIC} alt={"avatar"}></img>
                    </NavLink>
                </div>
                <div>{el.status}</div>
            </div>
        })}
    </div>
}
export default UsersFC;

type UsersFCPropsType = {
    usersPart: UserType[]
    pageSize: number
    usersCount: number
    currentPage: number
    pageChange: (page: number) => void
    followInProgress: string[]
    unFollowUserTC: (userId: string) => void
    followUserTC: (userId: string) => void
}
