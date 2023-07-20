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
    profilePage: {
        postData: PostDataType
        newPostText: string
    }
    dialogsPage: {
        dialogsData: DialogsDataType
        messagesData: MessagesDataType
    }
    sidebarData: SidebarDataType
}

export type ActionsType = AddPostActionType | AddCharActionType

export type AddPostActionType = {
    type: "ADD-POST"
    postText: string
}

export type AddCharActionType = {
    type: "ADD-CHAR"
    newText: string
}

export type StoreType = {
    _state: StateType
    addCharToState: (newText: string) => void
    addPostToState: (postText: string) => void
    _onChange: () => void
    subscribe: (callback: () => void) => void
    getState: () => StateType
    dispatch: (action: ActionsType) => void
}

const store: StoreType = {
    _state: {
        profilePage: {
            postData: [
                {id: 1, message: 'hi, how are you?', like: 23},
                {id: 2, message: 'It"s my first post?', like: 3},
                {id: 3, message: 'I like bananas!?', like: 2},
                {id: 4, message: 'Wooo, that"s nice!?', like: 211},],
            newPostText: 'abc'
        },
        dialogsPage: {
            dialogsData: [
                {id: '1', name: 'Dimych'},
                {id: '2', name: 'Mitrych'},
                {id: '3', name: 'Nikitich'}
            ],
            messagesData: [
                {id: 1, message: 'Yooapojspkdp aspasdppd jaspo djaspdjapdo jasp'},
                {id: 2, message: 'Lorem ipsum dolor sit amet, quas quod recusandae repellat suscipit voluptate.'},
                {id: 3, message: 'Nikitich'}
            ]
        },
        sidebarData: [
            {id: '1', name: "Annah"},
            {id: '2', name: "Kirstu"},
            {id: '3', name: "Mihhail"}
        ],
    },
    addCharToState(newText: string) {
        // let {newPostText, postData} = state.profilePage
        // let  newPostText = state.profilePage.newPostText new post eto NOVAJA peremennaja, prosto nazvannaja tak zhe kak staraja
        this._state.profilePage.newPostText = newText
        this._onChange()
    },
    addPostToState(postText: string) {
        const {postData, newPostText} = this._state.profilePage
        const newPost = {id: 5, message: postText, like: 222}
        // console.log(newPost)
        // console.log(state)
        postData.push(newPost);
        this._state.profilePage.newPostText = '';

        this._onChange()
        // return {...state, postData: [...state.postData, newPost] }
    },
    _onChange() { console.log('state changed')}, // posle 1 rerender tut uzhe rerenderAllTree functija.
    subscribe(callback) { this._onChange = callback },
    getState(){return this._state},
    dispatch(action){
       switch (action.type) {
           case "ADD-POST":
               const {postData} = this._state.profilePage
               const newPost = {id: 5, message: action.postText, like: 222}
               postData.push(newPost);
               this._state.profilePage.newPostText = '';
               this._onChange()
               break
           case "ADD-CHAR":
               this._state.profilePage.newPostText = action.newText
               this._onChange()
               break
        }
    }
}

export default store
