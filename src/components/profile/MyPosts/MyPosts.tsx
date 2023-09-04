import React, {ChangeEvent, createRef} from 'react';
import Post from "./Post/Post";
import {MyPostsType} from "./MyPostsContainer";

const MyPosts = (props: MyPostsType) => {
    const {updateNewPostText, addChar} = props
    const {postData, newPostText} = props.profilePage
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

    let showPost = postData.map(post => <Post key={post.id} id={post.id} message={post.message} like={post.like}/>)

    return (
        <div>
            <textarea ref={postMessageRef} onChange={postTextHandler} value={newPostText} name="post" id="1"/>
            <button onClick={onClickPostAddHandler}>Add post</button>
            {showPost}
        </div>
    );
};

export default MyPosts;