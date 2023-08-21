import React from 'react';
import {connect} from "react-redux";
import {StateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {
    followAC,
    setCurrentPageAC,
    setUsersAC, setUsersCountAC,
    unFollowAC,
    UserType
} from "../../store/users/users-reducer";
import UsersAPIComponent from "./UsersAPI";
import axios from "axios";
import UsersFC from "./UsersFC";

type MapStateToPropsType = {
    usersPart: UserType[]
    pageSize: number
    usersCount: number
    currentPage: number
}

type MapStateToDispatchType = {
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    setUsers: (users: UserType[]) => void
    setCurrentPage: (currentPage: number) => void
    setUsersCount: (usersCount: number) => void
}
export type UsersPropsType = MapStateToPropsType & MapStateToDispatchType



class UsersAPI extends React.Component<UsersPropsType> {

    componentDidMount() {
        const {setUsers, setUsersCount, pageSize} = this.props;
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${pageSize}`)
            .then(res => {
                setUsers(res.data.items)
                return res
            })
            .then(res => setUsersCount(res.data.totalCount - 24799))
    }

    pageChange = (page: number) => {
        const {setUsers, usersCount, setCurrentPage, pageSize} = this.props;
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${pageSize}`)
            .then(res => setUsers(res.data.items))
            .then(() => setCurrentPage(page))
    }

    render() {
        const {follow, unfollow, usersPart, pageSize, usersCount, currentPage} = this.props
        return <UsersFC follow={follow} unfollow={unfollow}
                        usersPart={usersPart}
                        pageSize={pageSize} usersCount={usersCount} currentPage={currentPage}
                        pageChange={this.pageChange}/>
    };
}

const mapStateToProps = (state: StateType): MapStateToPropsType => {
    return {
        usersPart: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        usersCount: state.usersPage.usersCount,
        currentPage: state.usersPage.currentPage
    }
}

const mapStateToDispatch = (dispatch: Dispatch): MapStateToDispatchType => {
    return {
        follow: (userId:string) => {
            console.log("followed")
            dispatch(followAC(userId))
        },
        unfollow: (userId:string) => {
            console.log("unfollowed ")
            dispatch(unFollowAC(userId))
        },
        setUsers: (users:UserType[]) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (currentPage: number) => {
            dispatch(setCurrentPageAC(currentPage))
        },
        setUsersCount: (usersCount: number) => {
            dispatch(setUsersCountAC(usersCount))
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapStateToDispatch)(UsersAPI)
export default UsersContainer;