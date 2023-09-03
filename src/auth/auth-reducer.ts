

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

export const authReducer = (state: AuthReducerType = initialState, actions: ActionsType): AuthReducerType => {
    switch (actions.type) {
        case "SET-USER-DATA":
            return {...state, ...actions.userData, isAuth: true }
        default:
            return state
    }
}

export const setUserAuthData = (userData: UserDataType) => ({type: "SET-USER-DATA", userData}) as const

type ActionsType = ReturnType<typeof setUserAuthData>
