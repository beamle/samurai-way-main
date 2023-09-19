import React from 'react';
import MyPosts from "./MyPosts";
import {addPost, ProfilePageType} from "../../../store/profile/profile-reducer";
import {StateType, StoreType} from "../../../redux/redux-store";
import {connect} from "react-redux";
import {Dispatch} from "redux";

const mapStateToProps = (state: StateType): MapStatePropsType  => {
    return {
        profilePage: state.profilePage
    }
}
// const mapDispatchToProps = (dispatch: Dispatch) => {
//     return {
//         // addChar: (char: string) => dispatch(addChar(char)),
//         addChar,
//         // updateNewPostText: (text: string) => {
//         //     let action = addPost(text)
//         //     dispatch(action)
//         // },
//     }
// }
const MyPostsContainer = connect(mapStateToProps, {addPost})(MyPosts);
export default MyPostsContainer;


type MapStatePropsType = {
    profilePage: ProfilePageType
}
type MapDispatchPropsType = {
    addPost: (text: string) => void
}
export type MyPostsType = MapDispatchPropsType & MapStatePropsType