import React, {ChangeEvent, createRef} from 'react';
import Post from "./Post/Post";
import {ProfilePropsType} from "../Profile/Profile";
import {addCharAC, addPostAC} from "../../../redux/state";

type MyPostsType = ProfilePropsType


const MyPosts = ({postData, newPostText, dispatch}: MyPostsType) => {

    let postMessageRef = createRef<HTMLTextAreaElement>();

    const postTextHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        dispatch(addCharAC(e.currentTarget.value))
    }

    const onClickPostAddHandler = () => {
        if (postMessageRef.current) {
            dispatch(addPostAC(postMessageRef.current?.value))
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