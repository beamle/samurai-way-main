import React from 'react';
import MyPosts from "./MyPosts";
import {addCharAC, addPostAC} from "../../../store/profile/profile.reducer";
import {StoreType} from "../../../redux/redux-store";

type MyPostsContainterType = {
    store: StoreType
}


const MyPostsContainer = (props:MyPostsContainterType) => {

    const {postData, newPostText} = props.store.getState().profilePage
    const {dispatch} = props.store

    const addChar = (char: string) => {
        dispatch(addCharAC(char))
    }

    const updateNewPostText = (text: string) => {
        let action = addPostAC(text)
        dispatch(action)
    }

    return (
        <MyPosts addChar={addChar} updateNewPostText={updateNewPostText}
                 postData={postData} newPostText={newPostText}

        />
    );
};

export default MyPostsContainer;