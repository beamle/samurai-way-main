import {v1} from "uuid";


// export type DialogsPageType = {
//     dialogsData: DialogDataType[]
//     messagesData: MessageDataType[]
//     newMessageText: string
// }

export type DialogsPageType = typeof initialState;

const initialState = {
    dialogsData: [
        {id: v1(), name: 'Dimych'},
        {id: v1(), name: 'Mitrych'},
        {id: v1(), name: 'Nikitich'}
    ] as DialogDataType[],
    messagesData: [
        {id: v1(), message: 'Yooapojspkdp aspasdppd jaspo djaspdjapdo jasp'},
        {id: v1(), message: 'Lorem ipsum dolor sit amet, quas quod recusandae repellat suscipit voluptate.'},
        {id: v1(), message: 'Nikitich'}
    ] as MessageDataType[],
}


export const dialogsReducer = (state: DialogsPageType = initialState, action: ActionsType): DialogsPageType => {
    switch (action.type) {
        case "ADD-MESSAGE":
            return {...state, messagesData: [...state.messagesData, {id: v1(), message: action.newMessage}]}
        default:
            return state
    }
}

export const addMessage = (newMessage: string) => ({type: "ADD-MESSAGE", newMessage} as const)

export type DialogDataType = {
    id: string
    name: string
}
export type MessageDataType = {
    id: string
    message: string
}

type ActionsType = ReturnType<typeof addMessage>