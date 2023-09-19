import {addPost, setUserProfileInfo} from "../profile/profile-reducer";
import {addMessage} from "../dialogs/dialogs.reducer";
import {setUserAuthData} from "../../auth/auth-reducer";

export type ActionsType =
    ReturnType<typeof addPost> | ReturnType<typeof addMessage> |
    ReturnType<typeof setUserProfileInfo> | ReturnType<typeof setUserAuthData>