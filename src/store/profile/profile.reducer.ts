import store, {ActionsType, ProfilePageType, StateType} from "../../redux/store";
import {v1} from "uuid";

export const addCharAC = (newText: string) => ({type: "ADD-CHAR" as const, newText})
export const addPostAC = (postText: string) => ({type: "ADD-POST" as const, postText})

const initialState: ProfilePageType = {
        postData: [
            {id: v1(), message: 'hi, how are you?', like: 23},
            {id: v1(), message: 'It"s my first post?', like: 3},
            {id: v1(), message: 'I like bananas!?', like: 2},
            {id: v1(), message: 'Wooo, that"s nice!?', like: 211},],
        newPostText: 'abc'
}

export const profileReducer = (state: ProfilePageType = initialState, action: ActionsType) => {
    switch (action.type) {
        case "ADD-POST":
            const {postData} = state
            const newPost = {id: v1(), message: action.postText, like: 222}
            postData.push(newPost);
            state.newPostText = '';
            // break
            return state
        case "ADD-CHAR":
            state.newPostText = action.newText
            // break
            return state
        default:
            return state
    }
}