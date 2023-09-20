
import {Dispatch} from "redux";
import {authAPI} from "../api/authAPI";


export type AuthReducerType = typeof initialState

export type UserDataType = {
    id: null,
    email: null,
    login: null
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
            return {...state, ...actions.userData, isAuth: true }
        default:
            return state
    }
}

//types
type AuthReducerActionsType = ReturnType<typeof setUserAuthData>
//AC
export const setUserAuthData = (userData: UserDataType) => ({type: "SET-USER-DATA", userData}) as const
//TC
export const getUserAuthTC = () => (dispatch: Dispatch<AuthReducerActionsType>) => {
    authAPI.getUserAuthData()
        .then(res => {
            if(res.data.resultCode === 0) dispatch(setUserAuthData(res.data.data))
        })
}
export const loginTC = (email: string, password: string, rememberMe: boolean) => (dispatch: Dispatch<AuthReducerActionsType>) => {
    authAPI.getUserAuthData()
        .then(res => {
            if(res.data.resultCode === 0) dispatch(setUserAuthData(res.data.data))
        })
}

