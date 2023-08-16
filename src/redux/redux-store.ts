import {combineReducers, createStore} from "redux";
import {profileReducer} from "../store/profile/profile.reducer";
import {dialogsReducer} from "../store/dialogs/dialogs.reducer";
import {sidebarDataReducer} from "../store/sidebarData/sidebarData.reducer";
import {usersReducer} from "../store/users/users-reducer";

export type StoreType = typeof store
export type StateType = ReturnType<typeof rootReducer>

let rootReducer=combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebarPart: sidebarDataReducer,
    usersPage: usersReducer

}) // rootReducer returns the state of our app
let store = createStore(rootReducer)
export default store;


// @ts-ignore
window.store = store;