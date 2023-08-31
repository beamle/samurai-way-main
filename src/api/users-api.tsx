import axios from "axios";
import {UsersReducerType} from "../store/users/users-reducer";


const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "7b095462-668f-44a3-9dd6-fc6dd090e3f3"
    }
})

export const usersAPI = {
    getUsers: (currentPage: number, pageSize: number) => {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(res => res.data)
    },
    followUser: (id: string) => {
        return instance.post(`follow/${id}`, null)
            .then(res => res.data)
    },
    unFollowUser: (id: string) => {
        return instance.delete(`follow/${id}`)
            .then(res => res.data)
    }
}
