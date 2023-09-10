import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "7b095462-668f-44a3-9dd6-fc6dd090e3f3"
    }
})

export const profileAPI = {
    getProfile: (userId: number) => {
        debugger
        return instance.get<GetProfileResponseType>(`profile/${userId}`)
    },
    getStatus: (userId: number) => {
        return instance.get<string>(`profile/status/${userId}`)
    },
    updateStatus: (status: string) => {
        return instance.put<ProfileStatusResponseType>(`profile/status`, {status})
    }
}

// types
type GetProfileResponseType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: {
        github: string
        vk: string
        facebook: string
        instagram: string
        twitter: string
        website: string
        youtube: string
        mainLink: string
    }
    photos: {
        small: string
        large: string
    }
}
type ProfileStatusResponseType = {
    resultCode: number
    messages: string[]
    data: {}
}