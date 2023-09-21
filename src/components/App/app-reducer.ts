import {Dispatch} from "redux";
import {AuthReducerActionsType, getUserAuthTC} from "../../auth/auth-reducer";
import {AppThunkDispatch} from "../../redux/redux-store";

const initialState = {
    isInitialized: false
}

export type AppType = typeof initialState;


export const appReducer = (state: AppType = initialState, action: ActionsType): AppType=> {
    switch (action.type) {
        case "SET_INITIALIZED":
            return {...state, isInitialized: action.isInitialized}
        default:
            return state
    }
}

//AC
export const setAppIsInitializedAC = (isInitialized: boolean) => ({type: "SET_INITIALIZED", isInitialized})
//TC
export const initializeAppTC = () => (dispatch: AppThunkDispatch) => {
    let promise = dispatch(getUserAuthTC());
    Promise.all([promise])
        .then( () => {
        dispatch(setAppIsInitializedAC(true))
    })
}

type ActionsType = ReturnType<typeof setAppIsInitializedAC> | AuthReducerActionsType