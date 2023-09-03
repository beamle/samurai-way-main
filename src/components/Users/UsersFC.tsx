import React from "react";
import s from "./Users.module.css";
import {ANONYMOUS_PIC} from "../../assets/pictures/picturesUrl";
import {UserType} from "../../store/users/users-reducer";
import {NavLink} from "react-router-dom";
import {usersAPI} from "../../api/users-api";

const UsersFC = ({follow, unFollow, usersPart, pageSize, usersCount, currentPage, pageChange, followInProgress, setFollowingInProgress}: UsersFCPropsType) => {
    let pagesCount = Math.ceil(usersCount / pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div>
        {pages.map(page => <span onClick={() => pageChange(page)}
                                 className={page === currentPage ? s.selectedPage : ''}>{page}</span>)}
        {usersPart.map(el => {
            const unFollowUser = () => {
                setFollowingInProgress(el.id, true)
                usersAPI.unFollowUser(el.id)
                    .then(res => {
                        if(res.resultCode === 0) unFollow(el.id)
                        setFollowingInProgress(el.id, false)
                    })
            }
            const followUser = () => {
                setFollowingInProgress(el.id, true)
                usersAPI.followUser(el.id)
                    .then(res => {
                        if(res.resultCode === 0) follow(el.id)
                        setFollowingInProgress(el.id, false)
                    })
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
    follow: (userId: string) => void
    unFollow: (userId: string) => void
    usersPart: UserType[]
    pageSize: number
    usersCount: number
    currentPage: number
    pageChange: (page: number) => void
    followInProgress: string[]
    setFollowingInProgress: (userId: string, isFetching: boolean) => void
}
