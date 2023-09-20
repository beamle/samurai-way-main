import axios from "axios";
import { instance } from "./profileAPI";

export const authAPI = {
    getUserAuthData: () => {
        return instance.get("auth/me")
    }
}