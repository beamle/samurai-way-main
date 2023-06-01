import {rerenderEntireTree} from "../render";

export type PostDataType = {
    id: number
    message: string
    like: number
}[]

export type DialogsDataType = {
    id: string
    name: string
}[]

export type MessagesDataType = {
    id: number
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
    postData: PostDataType
    dialogsData: DialogsDataType
    messagesData: MessagesDataType
    sidebarData: SidebarDataType
    charData: string
}

export let state: StateType = {
    postData: [
        {id: 1, message: 'hi, how are you?', like: 23},
        {id: 2, message: 'It"s my first post?', like: 3},
        {id: 3, message: 'I like bananas!?', like: 2},
        {id: 4, message: 'Wooo, that"s nice!?', like: 211},
    ],
    dialogsData: [
        {id: '1', name: 'Dimych'},
        {id: '2', name: 'Mitrych'},
        {id: '3', name: 'Nikitich'}
    ],
    messagesData: [
        {id: 1, message: 'Yooapojspkdp aspasdppd jaspo djaspdjapdo jasp'},
        {id: 2, message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti dolorum ducimus laborum nihil odit quas quod recusandae repellat suscipit voluptate.'},
        {id: 3, message: 'Nikitich'}
    ],
    sidebarData: [
        {id: '1', name: "Annah"},
        {id: '2', name: "Kirstu"},
        {id: '3', name: "Mihhail"}
    ],
    charData: 'abc'
}

export function addPostToState(postText: string) {
    const newPost = { id: 5, message: postText, like: 222 }
    console.log(newPost)
    console.log(state)
    state.postData.push(newPost)
    rerenderEntireTree(state)
    // return {...state, postData: [...state.postData, newPost] }
}

export function addCharToState(character: string) {
    console.log(state.charData,'----', character)
    state.charData = character

    rerenderEntireTree(state)
}
