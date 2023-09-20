import axios from "axios";
import {UsersReducerType} from "../store/users/users-reducer";
import { instance } from "./profileAPI";

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
