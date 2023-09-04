import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "7b095462-668f-44a3-9dd6-fc6dd090e3f3"
    }
})

export const headerAPI = {
    getUserAuthData: () => {
        return instance.get("auth/me")
    }
}