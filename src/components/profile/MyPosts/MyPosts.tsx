import React, {ChangeEvent, createRef} from 'react';
import Post from "./Post/Post";
import {ProfilePropsType} from "../Profile/Profile";

type MyPostsType = ProfilePropsType

const MyPosts = (props: MyPostsType) => {
    console.log(props, "mypostsposrps")

    const {postData, newPostText} = props;
    let postMessageRef = createRef<HTMLTextAreaElement>();

    const postTextHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        // props.addCharToState(e.currentTarget.value)
        props.dispatch({type: "ADD-CHAR", newText: e.currentTarget.value})
    }

    const onClickPostAddHandler = () => {
        if (postMessageRef.current) {
            // props.addPostToState(postMessageRef.current?.value);
            props.dispatch({type: "ADD-POST", postText: postMessageRef.current?.value})
        }
    }

    let showPost = postData.map(post => <Post id={post.id} message={post.message} like={post.like}/>)

    return (
        <div>
            <textarea ref={postMessageRef} onChange={postTextHandler} value={newPostText} name="post" id="1"></textarea>
            <button onClick={onClickPostAddHandler}>Add post</button>
            {showPost}
        </div>
    );
};

export default MyPosts;