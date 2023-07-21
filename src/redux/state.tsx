import { v1 } from "uuid"

export type PostDataType = {
    id: string
    message: string
    like: number
}[]

export type DialogsDataType = {
    id: string
    name: string
}[]

export type MessagesDataType = {
    id: string
    message: string
}[]

export type SidebarDataType = {
    id: string
    name: string
}[]

export type CharDataType = {
    charData: string
}

export type StateType = {
    profilePage: {
        postData: PostDataType
        newPostText: string
    }
    dialogsPage: {
        dialogsData: DialogsDataType
        messagesData: MessagesDataType
        newMessageText: string
    }
    sidebarData: SidebarDataType
}


// export type AddPostActionType = {
//     type: "ADD-POST"
//     postText: string
// }
//
// export type AddCharActionType = {
//     type: "ADD-CHAR"
//     newText: string
// }

export type StoreType = {
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
                {id: "1", message: 'hi, how are you?', like: 23},
                {id: "2", message: 'It"s my first post?', like: 3},
                {id: "3", message: 'I like bananas!?', like: 2},
                {id: "4", message: 'Wooo, that"s nice!?', like: 211},],
            newPostText: 'abc'
        },
        dialogsPage: {
            dialogsData: [
                {id: '1', name: 'Dimych'},
                {id: '2', name: 'Mitrych'},
                {id: '3', name: 'Nikitich'}
            ],
            messagesData: [
                {id: '1', message: 'Yooapojspkdp aspasdppd jaspo djaspdjapdo jasp'},
                {id: '2', message: 'Lorem ipsum dolor sit amet, quas quod recusandae repellat suscipit voluptate.'},
                {id: '3', message: 'Nikitich'}
            ],
            newMessageText: 'abc'
        },
        sidebarData: [
            {id: '1', name: "Annah"},
            {id: '2', name: "Kirstu"},
            {id: '3', name: "Mihhail"}
        ],
    },
    _onChange() { console.log('state changed')}, // posle 1 rerender tut uzhe rerenderAllTree functija.
    subscribe(callback) { this._onChange = callback },
    getState(){return this._state},
    dispatch(action){
       switch (action.type) {
           case "ADD-POST":
               const {postData} = this._state.profilePage
               const newPost = {id: v1(), message: action.postText, like: 222}
               postData.push(newPost);
               this._state.profilePage.newPostText = '';
               this._onChange()
               break
           case "ADD-CHAR":
               this._state.profilePage.newPostText = action.newText
               this._onChange()
               break
           case "ADD-MESSAGE-CHAR":
               this._state.dialogsPage.newMessageText = action.newMessageChar
               this._onChange()
               break
           case "ADD-MESSAGE":
               let messageToAdd = this._state.dialogsPage.newMessageText
               this._state.dialogsPage.messagesData.push({id: v1(), message: messageToAdd})
               this._state.dialogsPage.newMessageText = ''
               this._onChange()
               break
        }
    }
}

export const addCharAC = (newText: string) => ({type: "ADD-CHAR" as const, newText})
export const addPostAC = (postText: string) => ({type: "ADD-POST" as const, postText})
export const addMessageCharAC = (newMessageChar: string) => ({type: "ADD-MESSAGE-CHAR", newMessageChar} as const)
export const addMessageAC = (newMessage: string) => ({type: "ADD-MESSAGE", newMessage} as const)

export type ActionsType = ReturnType<typeof addCharAC> | ReturnType<typeof addPostAC> | ReturnType<typeof addMessageCharAC> | ReturnType<typeof addMessageAC>


export default store
