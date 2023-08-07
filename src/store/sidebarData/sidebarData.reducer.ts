import {StateType} from "../../redux/redux-store";
import {v1} from "uuid";

export type SidebarComponentType = typeof initialState
type SidebarDataType = {
    id: string
    name: string
}


const initialState = {
    sidebarData: [
        {id: v1(), name: "Annah"},
        {id: v1(), name: "Kirstu"},
        {id: v1(), name: "Mihhail"}
    ] as SidebarDataType[],
}

export const sidebarDataReducer = (state: SidebarComponentType = initialState, action: any) => {
    switch (action.type){
        default:
            return state
    }
}