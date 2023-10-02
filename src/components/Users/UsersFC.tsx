import React from "react";
import {UserType} from "../../store/users/users-reducer";
import {Paginator} from "../../common/Paginator/Paginator";
import User from "./User/User.jsx";

const UsersFC = ({followUserTC, unFollowUserTC, usersPart, pageSize, usersCount, currentPage, pageChange, followInProgress}: UsersFCPropsType) => {

    return <div>
        <Paginator currentPage={currentPage} pageChange={pageChange} usersCount={usersCount} pageSize={pageSize}/>
        <>
            {usersPart.map(el => <User key={el.id}
                                       followInProgress={followInProgress}
                                       unFollowUserTC={unFollowUserTC}
                                       followUserTC={followUserTC}
                                       user={el}
                                       usersPart={usersPart}/>
            )}
        </>
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
