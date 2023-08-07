import {ActionsType} from "../../redux/store";
import {v1} from "uuid";

export const addCharAC = (newText: string) => ({type: "ADD-CHAR" as const, newText})
export const addPostAC = (postText: string) => ({type: "ADD-POST" as const, postText})

type PostDataType = {
    id: string
    message: string
    like: number
}[]
export type ProfilePageType = {
    postData: PostDataType
    newPostText: string
}

const initialState: ProfilePageType = {
        postData: [
            {id: v1(), message: 'hi, how are you?', like: 23},
            {id: v1(), message: 'It"s my first post?', like: 3},
            {id: v1(), message: 'I like bananas!?', like: 2},
            {id: v1(), message: 'Wooo, that"s nice!?', like: 211},],
        newPostText: 'abc'
}

export const profileReducer = (state: ProfilePageType = initialState, action: ActionsType): ProfilePageType => {
    switch (action.type) {
        case "ADD-POST":
            const newPost = {id: v1(), message: action.postText, like: 222}
            state.newPostText = '';
            return {...state, postData: [...state.postData, newPost]}
        case "ADD-CHAR":
            return {...state, newPostText: action.newText}
        default:
            return state
    }
}