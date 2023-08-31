import React from 'react';
import {connect} from "react-redux";
import {StateType} from "../../redux/redux-store";
import {
    follow,
    setCurrentPage,
    setIsFetching,
    setUsers,
    setUsersCount,
    unFollow,
    UserType
} from "../../store/users/users-reducer";
import axios from "axios";
import UsersFC from "./UsersFC";
import Preloader from "../../common/Preloader/Preloader";
import {usersAPI} from "../../api/users-api";

class UsersAPI extends React.Component<UsersAPIPropsType> {

    componentDidMount() {
        const {setUsers, currentPage, setUsersCount, pageSize, setIsFetching} = this.props;
        setIsFetching(true)
        usersAPI.getUsers(currentPage, pageSize)
            .then(data => {
                setIsFetching(false);
                return data
            })
            .then(data => {
                setUsers(data.items)
                return data
            })
            .then(data => setUsersCount(data.totalCount - 24799))
    }

    pageChange = (page: number) => {
        const {setUsers, usersCount, setCurrentPage, pageSize, setIsFetching} = this.props;
        setIsFetching(true)
        usersAPI.getUsers(page, pageSize)
            .then(res => {
                setIsFetching(false);
                return res
            })
            .then(res => setUsers(res.data.items))
            .then(() => setCurrentPage(page))
    }

    render() {
        const {follow, unFollow, usersPart, pageSize, usersCount, currentPage, isFetching} = this.props
        return <>
            {isFetching ? <Preloader isFetching={isFetching}/> :
                <UsersFC follow={follow} unFollow={unFollow}
                         usersPart={usersPart}
                         pageSize={pageSize} usersCount={usersCount} currentPage={currentPage}
                         pageChange={this.pageChange}/>
            }
        </>
    };
}

const mapStateToProps = (state: StateType): MapStateToPropsType => {
    return {
        usersPart: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        usersCount: state.usersPage.usersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}

// const mapStateToDispatch = (dispatch: Dispatch): MapStateToDispatchType => {
//     return {
//         follow: followAC,
//         unfollow: unFollowAC,
//         setUsers: setUsersAC,
//         setCurrentPage: setCurrentPageAC,
//         setUsersCount: setUsersCountAC,
//         setIsFetching: setIsFetchingAC
//     }
// }

const UsersContainer = connect(mapStateToProps, {
    follow,
    unFollow,
    setUsers,
    setCurrentPage,
    setUsersCount,
    setIsFetching
})(UsersAPI)
export default UsersContainer;

type MapStateToPropsType = {
    usersPart: UserType[]
    pageSize: number
    usersCount: number
    currentPage: number
    isFetching: boolean
}

type MapStateToDispatchType = {
    follow: (userId: string) => void
    unFollow: (userId: string) => void
    setUsers: (users: UserType[]) => void
    setCurrentPage: (currentPage: number) => void
    setUsersCount: (usersCount: number) => void
    setIsFetching: (isFetching: boolean) => void
}

//TODO why here void ? Action creator returns actions.
export type UsersAPIPropsType = MapStateToPropsType & MapStateToDispatchType