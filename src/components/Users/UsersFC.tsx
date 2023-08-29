import React from "react";
import s from "./Users.module.css";
import {ANONYMOUS_PIC} from "../../assets/pictures/picturesUrl";
import {UsersPropsType} from "./UsersContainer";
import {UserType} from "../../store/users/users-reducer";

type UsersFCType = {
    follow: (userId: string) => void
    unFollow: (userId: string) => void
    usersPart: UserType[]
    pageSize: number
    usersCount: number
    currentPage: number
    pageChange: (page: number) => void
}

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
            return <div key={el.id}>
                {el.name}
                {el.followed
                    ? <button onClick={() => unFollow(el.id)}>Unfollow</button>
                    : <button onClick={() => follow(el.id)}>Follow</button>}

                <div className={s.avatar}>
                    <img src={el.photos.small ? el.photos.small : ANONYMOUS_PIC} alt={"avatar"}></img>
                </div>
                <div>{el.status}</div>
            </div>
        })}
    </div>
}
export default UsersFC;
