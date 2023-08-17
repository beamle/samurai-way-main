import React from 'react';
import {connect} from "react-redux";
import Users from './Users.jsx';
import {StateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {followAC, setUsersAC, unFollowAC, UserType} from "../../store/users/users-reducer";

type MapStateToPropsType = {
    usersPart: UserType[]
}

type MapStateToDispatchType = {
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    setUsers: (users: UserType[]) => void
}

const mapStateToProps = (state: StateType): MapStateToPropsType => {
    return {
        usersPart: state.usersPage.users
    }
}

export type UsersPropsType = MapStateToPropsType & MapStateToDispatchType

const mapStateToDispatch = (dispatch: Dispatch): MapStateToDispatchType => {
    return {
        follow: (userId:string) => {
            console.log("followed")
            dispatch(followAC(userId))
        },
        unfollow: (userId:string) => {
            console.log("unfollowed ")
            dispatch(unFollowAC(userId))
        },
        setUsers: (users:UserType[]) => {
            dispatch(setUsersAC(users))
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapStateToDispatch)(Users)
export default UsersContainer;