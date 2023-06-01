import React, {ChangeEvent, useState} from 'react';
import Post from "./Post/Post";
import {addCharToState} from "../../../redux/state";
// import {addPostToState} from "../../../redux/state"; //should come through props, currently just importing

type MyPostsType = {
    postData: {
        id: number
        message: string
        like: number
    }[]
    charData: string
    addPostToState: (postText: string) => void
    addCharToState: (character: string) => void
}

const MyPosts = (props: MyPostsType) => {
    const {postData, charData} = props;
    const [postText, setPostText] = useState('');

    const PostTextHandler = (e:ChangeEvent<HTMLTextAreaElement>) => {
        props.addCharToState(e.target.value)
        setPostText(e.target.value)
    }



    const onClickHandler = () => {
        props.addPostToState(postText)
    }

    let showPost = postData.map(post => <Post id={post.id} message={post.message} like={post.like}/>)

    return (
        <div>
            <textarea onChange={PostTextHandler} value={charData} name="post" id="1"></textarea>
            <button onClick={onClickHandler}>Add post</button>
            {showPost}
        </div>
    );
};

export default MyPosts;