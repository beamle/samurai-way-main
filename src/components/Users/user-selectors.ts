import {StateType} from "../../redux/redux-store";

export const getUsers = (state: StateType) => {
    return state.usersPage.users;
}

export const getPageSize = (state: StateType) => {
    return state.usersPage.pageSize;
}

export const usersCount = (state: StateType) => {
    return state.usersPage.usersCount;
}

export const currentPage = (state: StateType) => {
    return state.usersPage.currentPage;
}

export const isFetching = (state: StateType) => {
    return state.usersPage.isFetching;
}

export const followInProgress = (state: StateType) => {
    return state.usersPage.followingInProgress;
}