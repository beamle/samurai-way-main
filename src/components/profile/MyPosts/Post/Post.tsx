import React from 'react';

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
                <span>{like}<button>Like</button></span>
                <button>Dislike</button>
            </div>
        </div>
    );
};

export default Post;