import React from 'react';
import {connect} from "react-redux";
import {StateType} from "../../../redux/redux-store";
import {Dispatch} from "redux";
import Sidebar from "./Sidebar";
import {SidebarComponentType} from "../../../store/sidebarData/sidebarData.reducer";

//
// const SidebarContainer = ({sidebarData}: SidebarPropsType) => {
//
//     let showFriends = sidebarData.map(friend => {
//         return (
//             <div key={friend.id} className={s.friend}>
//                 <div className={s.friendAvatar}></div>
//                 <div className={s.friendName}> {friend.name}</div>
//             </div>
//         )
//     })
//
//     return (
//         <>
//             <div className={s.sidebarContainer}>
//                 <div className={s.title}>Friends</div>
//                 <div className={s.friendsList}>{showFriends}</div>
//             </div>
//         </>
//     );
// };

type mapStateToPropsType = {
    sidebarPart: SidebarComponentType
}

type mapDispatchToPropsType = {

}

export type SidebarType = mapStateToPropsType & mapDispatchToPropsType

const mapStateToProps = (state:StateType): mapStateToPropsType => {
    return {
        sidebarPart: state.sidebarPart
    }
}

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {

    }
}

export const SidebarContainer = connect(mapStateToProps, mapDispatchToProps)(Sidebar)