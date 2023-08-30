import React from 'react';
import MyPosts from "./MyPosts";
import {addChar, addPost, ProfilePageType} from "../../../store/profile/profile-reducer";
import {StateType, StoreType} from "../../../redux/redux-store";
import {connect} from "react-redux";
import {Dispatch} from "redux";

// export  const MyPostsContainer = () => {
//     return <StoreContext.Consumer>{
//         (store) => {
//             const {postData, newPostText} = store.getState().profilePage
//             const {dispatch} = store
//             const addChar = (char: string) => dispatch(addChar(char))
//             const updateNewPostText = (text: string) => {
//                 let action = addPost(text)
//                 dispatch(action)
//             }
//             return <MyPosts addChar={addChar} updateNewPostText={updateNewPostText}
//                             postData={postData} newPostText={newPostText}/>
//         }
//     }
//     </StoreContext.Consumer>
// };


const mapStateToProps = (state: StateType): MapStatePropsType  => {
    return {
        profilePage: state.profilePage
        // newPostText: state.profilePage.newPostText,
        // postData: state.profilePage.postData,
    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        addChar: (char: string) => dispatch(addChar(char)),
        updateNewPostText: (text: string) => {
            let action = addPost(text)
            dispatch(action)
        },
    }
}
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;



type MapStatePropsType = {
    profilePage: ProfilePageType
}
type MapDispatchPropsType = {
    addChar: (char: string) => void
    updateNewPostText: (text: string) => void
}
export type MyPostsType = MapDispatchPropsType & MapStatePropsType