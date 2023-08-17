import React from 'react';
import {v1} from "uuid";
import {ActionsType} from "../../redux/store";


const initialState = {
    users: [] as UserType[]
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
            return {...state, users: [...state.users, ...action.users]}
        default:
            return state
    }
}

export const followAC = (id: string) => ({type: "FOLLOW", id}) as const
export const unFollowAC = (id: string) => ({type: "UNFOLLOW", id}) as const
export const setUsersAC = (users: UserType[]) => ({type: "SET_USERS", users}) as const