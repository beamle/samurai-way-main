import {Dispatch} from "redux";
import {authAPI} from "../api/authAPI";
import {stopSubmit} from "redux-form";


export type AuthReducerType = UserDataType & { isAuth: boolean };

export type UserDataType = {
    id: string | null
    email: string | null
    login: string | null
}


const initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}

export const authReducer = (state: AuthReducerType = initialState, actions: AuthReducerActionsType): AuthReducerType => {
    switch (actions.type) {
        case "SET-USER-DATA":
            return {...state, ...actions.userData, isAuth: actions.isAuth}
        default:
            return state
    }
}

//types
export type AuthReducerActionsType = ReturnType<typeof setUserAuthData>
//AC
export const setUserAuthData = (userData: UserDataType, isAuth: boolean) => ({type: "SET-USER-DATA", userData, isAuth}) as const
//TC
export const getUserAuthTC = () => async (dispatch: Dispatch) => {
    const res = await authAPI.getUserAuthData()
        try {
            if(res.data.resultCode === 0) dispatch(setUserAuthData(res.data.data, true))
        } catch (err) {}
}
export const loginTC = (email: string, password: string, rememberMe: boolean) => async (dispatch: any) => {
    const res = await authAPI.login(email, password, rememberMe)
        try {
            if(res.data.resultCode === 0) {
                dispatch(getUserAuthTC())
            } else {
                let message = res.data.messages.length > 0 ? res.data.messages[0] : "Some Error";
                let action = stopSubmit("login", {_error: message});
                dispatch(action)
            }
        } catch (err) {

        }
}
export const logoutTC = () => async (dispatch: Dispatch) => {
    const res = await authAPI.logout()
        try {
            if(res.data.resultCode === 0) {
                dispatch(setUserAuthData({id: null, email: null, login: null}, false))
            }
        } catch (err) {}
}
