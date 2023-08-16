import React from 'react';
import {UserType} from "../../store/users/users-reducer";

type UsersPropsType = {
    usersPart: UserType[]
}

const Users = (props: UsersPropsType) => {
    console.log(props)
    return (
        <div>
            {props.usersPart.map(el => <div>{el.name}
                </div> )}
            </div>
    );
};

export default Users;