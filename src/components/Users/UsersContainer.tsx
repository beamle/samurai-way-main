import React from 'react';
import {connect} from "react-redux";
import Users from './Users.jsx';
import {StateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {followAC, setUsersAC, unFollowAC, UserType} from "../../store/users/users-reducer";

type MapStateToPropsType = {
    usersPart: UserType[]
}

const mapStateToProps = (state: StateType): MapStateToPropsType => {
    debugger
    return {
        usersPart: state.usersPage.users
    }
}


const mapStateToDispatch = (dispatch: Dispatch) => {
    return {
        follow: (userId:string) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId:string) => {
            dispatch(unFollowAC(userId))
        },
        setUsers: (users:UserType[]) => {
            dispatch(setUsersAC(users))
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapStateToDispatch)(Users)
export default UsersContainer;