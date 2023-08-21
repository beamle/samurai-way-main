import React from 'react';
import {v1} from "uuid";
import {ActionsType} from "../../redux/store";


const initialState = {
    users: [] as UserType[],
    pageSize: 10,  // how many items will be returned in response
    usersCount: 11,
    currentPage: 1

}

type InitialStateType = typeof initialState

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

export const usersReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case "FOLLOW":
            return {...state, users: state.users.map(el => el.id === action.id ? {...el, followed: true} : el)}
        case "UNFOLLOW":
            return {...state, users: state.users.map(el => el.id === action.id ? {...el, followed: false} : el)}
        case "SET_USERS":
            // return {...state, users: [...state.users, ...action.users]}
            return {...state, users: action.users}
        case "SET_CURRENT_PAGE":
            return {...state, currentPage: action.currentPage}
        case "SET_USERS_COUNT":
            return {...state, usersCount: action.usersCount}
        default:
            return state
    }
}

export const followAC = (id: string) => ({type: "FOLLOW", id}) as const
export const unFollowAC = (id: string) => ({type: "UNFOLLOW", id}) as const
export const setUsersAC = (users: UserType[]) => ({type: "SET_USERS", users}) as const
export const setCurrentPageAC = (currentPage: number) => ({type: "SET_CURRENT_PAGE", currentPage}) as const
export const setUsersCountAC = (usersCount: number) => ({type: "SET_USERS_COUNT", usersCount}) as const