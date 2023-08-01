import React, {ChangeEvent, createRef} from 'react';
import Post from "./Post/Post";
import {ProfilePropsType} from "../Profile/Profile";
import {addCharAC, addPostAC} from "../../../store/profile/profile.reducer";
import {ActionsType} from "../../../redux/store";

type MyPostsType = {
    postData: {
        id: string
        message: string
        like: number
    }[]
    newPostText: string
    updateNewPostText: (text: string) => void
    addChar: (char: string) => void
}


const MyPosts = ({postData, newPostText, updateNewPostText, addChar}: MyPostsType) => {

    let postMessageRef = createRef<HTMLTextAreaElement>();

    const postTextHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        addChar(e.currentTarget.value)
    }

    const onClickPostAddHandler = () => {
        if (postMessageRef.current) {
            let text = postMessageRef.current?.value
            updateNewPostText(text)
        }
    }

    let showPost = postData.map(post => <Post id={post.id} message={post.message} like={post.like}/>)

    return (
        <div>
            <textarea ref={postMessageRef} onChange={postTextHandler} value={newPostText} name="post" id="1"/>
            <button onClick={onClickPostAddHandler}>Add post</button>
            {showPost}
        </div>
    );
};

export default MyPosts;