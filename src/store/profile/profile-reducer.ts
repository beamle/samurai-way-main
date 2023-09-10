
import {v1} from "uuid";
import {profileAPI} from "../../api/profileAPI";
import {Dispatch} from "redux";




const dummyExample = {
    userId: 22,
    lookingForAJob: true,
    lookingForAJobDescription: 'string',
    fullName: 'string',
    contacts: {
        github: 'string',
        vk: 'string',
        facebook: 'string',
        instagram: 'string',
        twitter: 'string',
        website: 'string',
        youtube: 'string',
        mainLink: 'string',
    },
    photos: {
        small: '',
        large: ''
    }
}

const initialState: ProfilePageType = {
    postData: [
        {id: v1(), message: 'hi, how are you?', like: 23},
        {id: v1(), message: 'It"s my first post?', like: 3},
        {id: v1(), message: 'I like bananas!?', like: 2},
        {id: v1(), message: 'Wooo, that"s nice!?', like: 211},],
    newPostText: 'abc',
    userProfileInfo: dummyExample,
    status: ''
}

export const profileReducer = (state: ProfilePageType = initialState, action: ProfileReducerActionsType): ProfilePageType => {
    switch (action.type) {
        case "ADD-POST":
            const newPost = {id: v1(), message: action.postText, like: 222}
            state.newPostText = '';
            return {...state, postData: [...state.postData, newPost]}
        case "ADD-CHAR":
            return {...state, newPostText: action.newText}
        case "SET-PROFILE-INFO":
            return {...state, userProfileInfo: {...action.userInfo}}
        case "SET-USER-STATUS":
            return {...state, status: action.status}
        default:
            return state
    }
}

//AC
export const addChar = (newText: string) => ({type: "ADD-CHAR", newText} as const)
export const addPost = (postText: string) => ({type: "ADD-POST", postText} as const)
export const setUserProfileInfo = (userInfo: UserProfileInfoType) => ({type: "SET-PROFILE-INFO", userInfo} as const)
export const setUserStatus = (status: string) => ({type: "SET-USER-STATUS", status} as const)

//TC
export const getUserProfileTC = (userId: number) => (dispatch: Dispatch<ProfileReducerActionsType>) => {
    profileAPI.getProfile(userId)
        .then(res => {
            dispatch(setUserProfileInfo(res.data))
        })
}
export const getUserStatusTC = (userId: number) => (dispatch: Dispatch<ProfileReducerActionsType>) => {
    profileAPI.getStatus(userId)
        .then(res => {
                dispatch(setUserStatus(res.data))
        })
}

export const updateUserStatusTC = (status: string) => (dispatch: Dispatch) => {
    profileAPI.updateStatus(status)
        .then(res => {
            if(res.data.resultCode === 0) {
                dispatch(setUserStatus(status))
            }
        })
}


//Types
type ProfileReducerActionsType =
    ReturnType<typeof addChar> | ReturnType<typeof addPost> |
    ReturnType<typeof setUserProfileInfo> | ReturnType<typeof setUserStatus>

export type PostDataType = {
    id: string
    message: string
    like: number
}[]

export type UserProfileInfoType = {
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
        small: (string)
        large: (string)
    }
}
export type ProfilePageType = {
    postData: PostDataType
    newPostText: string
    userProfileInfo: UserProfileInfoType
    status: string
}