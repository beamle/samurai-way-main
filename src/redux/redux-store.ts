import {combineReducers, createStore} from "redux";
import {profileReducer} from "../store/profile/profile.reducer";
import {dialogsReducer} from "../store/dialogs/dialogs.reducer";
import {sidebarDataReducer} from "../store/sidebarData/sidebarData.reducer";

export type StoreType = typeof store
export type StateType = ReturnType<typeof combineReducers>

let rootReducer=combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebarData: sidebarDataReducer
})
let store = createStore(rootReducer)
export default store;