import {applyMiddleware, combineReducers, createStore} from "redux";
import {profileReducer} from "../store/profile/profile-reducer";
import {dialogsReducer} from "../store/dialogs/dialogs.reducer";
import {sidebarDataReducer} from "../store/sidebarData/sidebarData.reducer";
import {usersReducer} from "../store/users/users-reducer";
import {authReducer} from "../auth/auth-reducer";
import thunkMiddleware from "redux-thunk";

export type StoreType = typeof store
export type StateType = ReturnType<typeof rootReducer>

let rootReducer=combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebarPart: sidebarDataReducer,
    usersPage: usersReducer,
    auth: authReducer

}) // rootReducer returns the state of our app
let store = createStore(rootReducer, applyMiddleware(thunkMiddleware))
export default store;


// @ts-ignore
window.store = store;