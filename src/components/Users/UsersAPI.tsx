import React, {Component} from 'react';
import {UsersPropsType} from "./UsersContainer";
import axios from 'axios';
import {ANONYMOUS_PIC} from "../../assets/pictures/picturesUrl";
import s from "./Users.module.css";
import {setCurrentPageAC} from "../../store/users/users-reducer";
import UsersFC from './UsersFC';

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

export default UsersAPI