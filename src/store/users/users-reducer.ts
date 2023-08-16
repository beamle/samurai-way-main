import React from 'react';
import {v1} from "uuid";
import {ActionsType} from "../../redux/store";


const initialState = {
    users: [
        {id: v1(), followed: true, name: "Nikita", status: "Student", location: {city: "Tallinn", country: "Estonia"} },
        {id: v1(), followed: true, name: "Bob", status: "Student", location: {city: "Tallinn", country: "Estonia"} },
        {id: v1(), followed: false, name: "James", status: "Student", location: {city: "Tallinn", country: "Estonia"} },
        {id: v1(), followed: false, name: "Liisa", status: "Student", location: {city: "Tallinn", country: "Estonia"} }
    ]
}

export type UserType = {
    id: string
    followed: boolean
    name: string
    status: string
    location: {city: string, country: string}
}

type UsersType = {
    users: UserType[]
}

export const usersReducer = (state: UsersType = initialState, action: ActionsType): UsersType => {
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