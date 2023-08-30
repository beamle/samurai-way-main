import {v1} from "uuid"
import {addChar, addPost, profileReducer, setUserProfileInfo} from "../store/profile/profile-reducer";
import {addMessageAC, addMessageCharAC, dialogsReducer} from "../store/dialogs/dialogs.reducer";
import {follow, setCurrentPage, setIsFetching, setUsers, setUsersCount, unFollow} from "../store/users/users-reducer";
import { setUserAuthData } from "../auth/auth-reducer";

type PostDataType = {
    id: string
    message: string
    like: number
}[]
type DialogsDataType = {
    id: string
    name: string
}[]
type MessagesDataType = {
    id: string
    message: string
}[]
type SidebarDataType = {
    id: string
    name: string
}[]
type ProfilePageType = {
    postData: PostDataType
    newPostText: string
}
type DialogsPageType = {
    dialogsData: DialogsDataType
    messagesData: MessagesDataType
    newMessageText: string
}
type SidebarType = {
    sidebarData: SidebarDataType
}

type StateType = {
    profilePage: ProfilePageType
    // postData: PostDataType
    // newPostText: string
    dialogsPage: {
        dialogsData: DialogsDataType
        messagesData: MessagesDataType
        newMessageText: string
    }
    sidebarData: SidebarDataType
}

type StoreType = {
    _state: StateType
    _onChange: () => void
    subscribe: (callback: () => void) => void
    getState: () => StateType
    dispatch: (action: ActionsType) => void
}

const store: StoreType = {
    _state: {
        profilePage: {
            postData: [
                {id: v1(), message: 'hi, how are you?', like: 23},
                {id: v1(), message: 'It"s my first post?', like: 3},
                {id: v1(), message: 'I like bananas!?', like: 2},
                {id: v1(), message: 'Wooo, that"s nice!?', like: 211},],
            newPostText: 'abc'
        },
        dialogsPage: {
            dialogsData: [
                {id: v1(), name: 'Dimych'},
                {id: v1(), name: 'Mitrych'},
                {id: v1(), name: 'Nikitich'}
            ],
            messagesData: [
                {id: v1(), message: 'Yooapojspkdp aspasdppd jaspo djaspdjapdo jasp'},
                {id: v1(), message: 'Lorem ipsum dolor sit amet, quas quod recusandae repellat suscipit voluptate.'},
                {id: v1(), message: 'Nikitich'}
            ],
            newMessageText: 'abc'
        },
        sidebarData: [
            {id: v1(), name: "Annah"},
            {id: v1(), name: "Kirstu"},
            {id: v1(), name: "Mihhail"}
        ],
    },
    _onChange() {
        console.log('state changed')
    }, // posle 1 rerender tut uzhe rerenderAllTree functija.
    subscribe(callback) {
        this._onChange = callback
    },
    getState() {
        return this._state
    },
    dispatch(action) {
        // this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._onChange()
    }
}

// export const addChar = (newText: string) => ({type: "ADD-CHAR" as const, newText})
// export const addPost = (postText: string) => ({type: "ADD-POST" as const, postText})
// export const addMessageCharAC = (newMessageChar: string) => ({type: "ADD-MESSAGE-CHAR", newMessageChar} as const)
// export const addMessageAC = (newMessage: string) => ({type: "ADD-MESSAGE", newMessage} as const)

export type ActionsType =
    ReturnType<typeof addChar> | ReturnType<typeof addPost> |
    ReturnType<typeof addMessageCharAC> | ReturnType<typeof addMessageAC> |
    ReturnType<typeof follow> | ReturnType<typeof unFollow> |
    ReturnType<typeof setUsers> | ReturnType<typeof setCurrentPage> |
    ReturnType<typeof setUsersCount> | ReturnType<typeof setIsFetching> |
    ReturnType<typeof setUserProfileInfo> | ReturnType<typeof setUserAuthData>
// TODO take this shit out to the separate file


