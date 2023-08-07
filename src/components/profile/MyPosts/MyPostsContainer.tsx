import React from 'react';
import MyPosts from "./MyPosts";
import {addCharAC, addPostAC, ProfilePageType} from "../../../store/profile/profile.reducer";
import {StateType, StoreType} from "../../../redux/redux-store";
import {connect} from "react-redux";
import {Dispatch} from "redux";

// export  const MyPostsContainer = () => {
//     return <StoreContext.Consumer>{
//         (store) => {
//             const {postData, newPostText} = store.getState().profilePage
//             const {dispatch} = store
//             const addChar = (char: string) => dispatch(addCharAC(char))
//             const updateNewPostText = (text: string) => {
//                 let action = addPostAC(text)
//                 dispatch(action)
//             }
//             return <MyPosts addChar={addChar} updateNewPostText={updateNewPostText}
//                             postData={postData} newPostText={newPostText}/>
//         }
//     }
//     </StoreContext.Consumer>
// };

type MapStatePropsType = {
    profilePage: ProfilePageType
}

type MapDispatchPropsType = {
    addChar: (char: string) => void
    updateNewPostText: (text: string) => void
}

export type MyPostsType = MapDispatchPropsType & MapStatePropsType

const mapStateToProps = (state: StateType): MapStatePropsType  => {
    return {
        profilePage: state.profilePage
        // newPostText: state.profilePage.newPostText,
        // postData: state.profilePage.postData,
    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        addChar: (char: string) => dispatch(addCharAC(char)),
        updateNewPostText: (text: string) => {
            let action = addPostAC(text)
            dispatch(action)
        },
    }
}
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;

