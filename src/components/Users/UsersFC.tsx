import React from "react";
import s from "./Users.module.css";
import {ANONYMOUS_PIC} from "../../assets/pictures/picturesUrl";
import {UsersAPIPropsType} from "./UsersContainer";
import {UserType} from "../../store/users/users-reducer";
import {NavLink} from "react-router-dom";
import axios from "axios";
import {usersAPI} from "../../api/users-api";

const UsersFC = ({follow, unFollow, usersPart, pageSize, usersCount, currentPage, pageChange}: UsersFCType) => {

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
                usersAPI.unFollowUser(el.id)
                    .then(res => {
                        if(res.resultCode === 0) unFollow(el.id)
                    })
            }
            const followUser = () => {
                usersAPI.followUser(el.id)
                    .then(res => {
                        if(res.resultCode === 0) follow(el.id)
                    })
            }
            return <div key={el.id}>
                {el.name}
                {el.followed

                    ? <button onClick={unFollowUser}>Unfollow</button>
                    : <button onClick={followUser}>Follow</button>}

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

type UsersFCType = {
    follow: (userId: string) => void
    unFollow: (userId: string) => void
    usersPart: UserType[]
    pageSize: number
    usersCount: number
    currentPage: number
    pageChange: (page: number) => void
}
