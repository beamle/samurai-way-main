import {ActionsType, DialogsPageType} from "../../redux/store";
import {v1} from "uuid";

export const addMessageCharAC = (newMessageChar: string) => ({type: "ADD-MESSAGE-CHAR", newMessageChar} as const)
export const addMessageAC = (newMessage: string) => ({type: "ADD-MESSAGE", newMessage} as const)

const initialState: DialogsPageType = {
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
}

export const dialogsReducer = (state: DialogsPageType = initialState, action: ActionsType) => {
    switch (action.type) {
        case "ADD-MESSAGE-CHAR":
            state.newMessageText = action.newMessageChar
            return state
        case "ADD-MESSAGE":
            let messageToAdd = state.newMessageText
            state.messagesData.push({id: v1(), message: messageToAdd})
            state.newMessageText = ''
            return state
        default:
            return state
    }
}