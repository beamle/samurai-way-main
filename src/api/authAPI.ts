import axios from "axios";
import { instance } from "./profileAPI";

export const authAPI = {
    getUserAuthData: () => {
        return instance.get("auth/me")
    },
    login: (email: string, password: string, rememberMe = false) => {
        return instance.post(`auth/login`, {email, password, rememberMe });
    },
    logout: () => {
        return instance.delete(`auth/login`);
    }
}