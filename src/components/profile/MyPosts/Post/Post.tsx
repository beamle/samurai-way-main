import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faThumbsUp} from "@fortawesome/free-regular-svg-icons/faThumbsUp";
import {faThumbsDown} from "@fortawesome/free-regular-svg-icons/faThumbsDown";

type PostType = {
    id: string
    message: string
    like?: number
}

const Post = (props: PostType) => {
    const { message, like } = props

    return (
        <div>
            <div><p>&#128293; {message} &#128293;</p></div>
            <div>
                <span>{like}
                    <button>{thumbsUp}</button>
                </span>
                <button>{thumbsDown}</button>
            </div>
        </div>
    );
};

export default Post;

const thumbsUp = <FontAwesomeIcon icon={faThumbsUp}/>
const thumbsDown = <FontAwesomeIcon icon={faThumbsDown}/>