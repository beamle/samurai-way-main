import React from 'react';
import {connect} from "react-redux";
import {StateType} from "../../redux/redux-store";
import {
    follow, followUserTC, getUsersTC,
    setCurrentPage, setFollowingInProgress,
    setIsFetching,
    setUsers,
    setUsersCount,
    unFollow, unFollowUserTC,
    UserType
} from "../../store/users/users-reducer";
import axios from "axios";
import UsersFC from "./UsersFC";
import Preloader from "../../common/Preloader/Preloader";
import {Navigate} from "react-router-dom";
import {currentPage, followInProgress, getPageSize, getUsers, isFetching, usersCount} from "./user-selectors";

class UsersAPI extends React.Component<UsersAPIPropsType> {

    componentDidMount() {
        const {currentPage, pageSize, getUsersTC} = this.props;
        getUsersTC(currentPage, pageSize)
    }

    pageChange = (page: number) => {
        const {pageSize, getUsersTC} = this.props;
        getUsersTC(page, pageSize)
    }

    render() {
        const {usersPart, pageSize, usersCount, currentPage, isFetching, followInProgress,
            unFollowUserTC, followUserTC, isAuth} = this.props
        if(!isAuth) return <Navigate to={"/login"}/>
        return <>
            {isFetching
                ? <Preloader isFetching={isFetching}/>
                : <UsersFC usersPart={usersPart}
                                    pageSize={pageSize} usersCount={usersCount} currentPage={currentPage}
                                    pageChange={this.pageChange} followInProgress={followInProgress}
                                    unFollowUserTC={unFollowUserTC} followUserTC={followUserTC}/>

            }
        </>
    };
}

const mapStateToProps = (state: StateType): MapStateToPropsType => {
    return {
        usersPart: getUsers(state),
        pageSize: getPageSize(state),
        usersCount: usersCount(state),
        currentPage: currentPage(state),
        isFetching: isFetching(state),
        followInProgress: followInProgress(state),
        isAuth: state.auth.isAuth
    }
}

const UsersContainer = connect(mapStateToProps, {
    follow,
    unFollow,
    setUsers,
    setCurrentPage,
    setUsersCount,
    setIsFetching,
    setFollowingInProgress,
    getUsersTC,
    unFollowUserTC,
    followUserTC
})(UsersAPI)
export default UsersContainer;

type MapStateToPropsType = {
    usersPart: UserType[]
    pageSize: number
    usersCount: number
    currentPage: number
    isFetching: boolean
    followInProgress: string[]
    isAuth: boolean
}

type MapStateToDispatchType = {
    setUsers: (users: UserType[]) => void
    setCurrentPage: (currentPage: number) => void
    setUsersCount: (usersCount: number) => void
    setIsFetching: (isFetching: boolean) => void
    getUsersTC: (currentPage: number, pageSize: number) => void
    unFollowUserTC: (userId: string) => void
    followUserTC: (userId: string) => void
}

export type UsersAPIPropsType = MapStateToPropsType & MapStateToDispatchType