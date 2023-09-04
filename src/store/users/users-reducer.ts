import React from 'react';
import {v1} from "uuid";
import {Dispatch} from "redux";
import {usersAPI} from "../../api/users-api";


const initialState = {
    users: [] as UserType[],
    pageSize: 10,  // how many items will be returned in response
    usersCount: 11,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [] as string[]
}

export type UsersReducerType = typeof initialState

export type UserType = {
    id: string
    followed: boolean
    name: string
    status: string
    uniqueUrlName: string
    photos: {
        small: string
        large: string
    }
}

export const usersReducer = (state: UsersReducerType = initialState, action: UsersActionsType): UsersReducerType => {
    switch (action.type) {
        case "FOLLOW":
            return {...state, users: state.users.map(el => el.id === action.id ? {...el, followed: true} : el)}
        case "UNFOLLOW":
            return {...state, users: state.users.map(el => el.id === action.id ? {...el, followed: false} : el)}
        case "SET_USERS":
            return {...state, users: action.users}
        case "SET_CURRENT_PAGE":
            return {...state, currentPage: action.currentPage}
        case "SET_USERS_COUNT":
            return {...state, usersCount: action.usersCount}
        case "TOGGLE-IS-FETCHING":
            return {...state, isFetching: action.isFetching}
        case "SET-FOLLOWING-PROGRESS":
            return {
                ...state,
                followingInProgress: action.isFetching ? [...state.followingInProgress, action.userId] : state.followingInProgress.filter(id => id !== action.userId)
            }
        default:
            return state
    }
}

export const follow = (id: string) => ({type: "FOLLOW", id}) as const
export const unFollow = (id: string) => ({type: "UNFOLLOW", id}) as const
export const setUsers = (users: UserType[]) => ({type: "SET_USERS", users}) as const
export const setCurrentPage = (currentPage: number) => ({type: "SET_CURRENT_PAGE", currentPage}) as const
export const setUsersCount = (usersCount: number) => ({type: "SET_USERS_COUNT", usersCount}) as const
export const setIsFetching = (isFetching: boolean) => ({type: "TOGGLE-IS-FETCHING", isFetching}) as const
export const setFollowingInProgress = (userId: string, isFetching: boolean) => ({
    type: "SET-FOLLOWING-PROGRESS",
    userId,
    isFetching
} as const)

type UsersActionsType =
    ReturnType<typeof follow> | ReturnType<typeof unFollow> |
    ReturnType<typeof setUsers> | ReturnType<typeof setCurrentPage> |
    ReturnType<typeof setUsersCount> | ReturnType<typeof setIsFetching> |
    ReturnType<typeof setFollowingInProgress>

export const getUsersTC = (currentPage: number, pageSize: number) => (dispatch: Dispatch<UsersActionsType>) => {
    dispatch(setIsFetching(true))
    usersAPI.getUsers(currentPage, pageSize)
        .then(data => {
            dispatch(setIsFetching(false))
            return data
        })
        .then(data => {
            dispatch(setUsers(data.items))
            return data
        })
        .then(data => dispatch(setUsersCount(data.totalCount - 24799)))
}

export const unFollowUserTC = (userId: string) => (dispatch: Dispatch<UsersActionsType>) => {
    dispatch(setFollowingInProgress(userId, true))
    usersAPI.unFollowUser(userId)
        .then(res => {
            if (res.resultCode === 0) dispatch(unFollow(userId))
            dispatch(setFollowingInProgress(userId, false))
        })

}

export const followUserTC = (userId: string) => (dispatch: Dispatch<UsersActionsType>) => {
    dispatch(setFollowingInProgress(userId, true))
    usersAPI.followUser(userId)
        .then(res => {
            if(res.resultCode === 0) dispatch(follow(userId))
            dispatch(setFollowingInProgress(userId, false))
        })
}