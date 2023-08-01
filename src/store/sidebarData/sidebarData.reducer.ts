import {StateType} from "../../redux/redux-store";
import {v1} from "uuid";
import {SidebarDataType, SidebarType} from "../../redux/store";

const initialState: SidebarType = {
    sidebarData: [
        {id: v1(), name: "Annah"},
        {id: v1(), name: "Kirstu"},
        {id: v1(), name: "Mihhail"}
    ],
}

export const sidebarDataReducer = (state: SidebarType = initialState, action: any) => {
    switch (action.type){
        default:
            return state
    }
}