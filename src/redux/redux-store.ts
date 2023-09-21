import {AnyAction, applyMiddleware, combineReducers, createStore} from "redux";
import {profileReducer} from "../store/profile/profile-reducer";
import {dialogsReducer} from "../store/dialogs/dialogs.reducer";
import {sidebarDataReducer} from "../store/sidebarData/sidebarData.reducer";
import {usersReducer} from "../store/users/users-reducer";
import {authReducer} from "../auth/auth-reducer";
import thunkMiddleware, { ThunkDispatch } from "redux-thunk";
import { reducer as formReducer } from "redux-form"
import {appReducer} from "../components/App/app-reducer";

export type StoreType = typeof store
export type StateType = ReturnType<typeof rootReducer>

let rootReducer=combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebarPart: sidebarDataReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer

}) // rootReducer returns the state of our App
let store = createStore(rootReducer, applyMiddleware(thunkMiddleware))
export type AppThunkDispatch = ThunkDispatch<StateType, any, AnyAction>


export default store;


// @ts-ignore
window.store = store;