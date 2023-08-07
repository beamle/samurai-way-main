import React from 'react';
import s from "./Sidebar.module.css";
import {SidebarType} from "./SidebarContainer";


const Sidebar = (props: SidebarType) => {
    const {sidebarData} = props.sidebarPart;

    let showFriends = sidebarData.map(friend => {
        return (
            <div key={friend.id} className={s.friend}>
                <div className={s.friendAvatar}></div>
                <div className={s.friendName}> {friend.name}</div>
            </div>
        )
    })

    return (
        <>
            <div className={s.sidebarContainer}>
                <div className={s.title}>Friends</div>
                <div className={s.friendsList}>{showFriends}</div>
            </div>
        </>
    );
};

export default Sidebar;
