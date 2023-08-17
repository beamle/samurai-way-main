import React from 'react';
import {UsersPropsType} from "./UsersContainer";
import axios from 'axios';
import {ANONYMOUS_PIC} from "../../assets/pictures/picturesUrl";
import s from "./Users.module.css";

const settings = {
    withCredentials: true,
    headers: {
        "API-KEY": "7b095462-668f-44a3-9dd6-fc6dd090e3f3"
    }
}


const Users = (props: UsersPropsType) => {
    const {follow, unfollow, setUsers} = props;
    console.log(props)
    const getUsers = () => {
        if (props.usersPart.length === 0) {
            axios.get("https://social-network.samuraijs.com/api/1.0/users")
                .then(res => setUsers(res.data.items))

        }
    }

    return (
        <div>
            <button onClick={getUsers}>Get users</button>
            {props.usersPart.map(el => {
                return <div key={el.id}>
                    {el.name}
                    {el.followed
                        ? <button onClick={() => unfollow(el.id)}>Unfollow</button>
                        : <button onClick={() => follow(el.id)}>Follow</button>}

                    <div className={s.avatar}>
                        <img src={el.photos.small ? el.photos.small : ANONYMOUS_PIC} alt={"avatar"}></img>
                    </div>
                    <div>{el.status}</div>
                </div>
            })}
        </div>
    );
};

export default Users;