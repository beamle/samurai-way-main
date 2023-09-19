import React, {ChangeEvent, FC, RefObject} from 'react';
import Post from "./Post/Post";
import {MyPostsType} from "./MyPostsContainer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, requiredField} from "../../../utils/validators/validators";
import {MyTextArea} from "../../../common/FormsControls/MyTextArea";


const maxLength15 = maxLengthCreator(15)

const MyPosts = (props: MyPostsType) => {
    const {addPost} = props
    const {postData} = props.profilePage

    let showPost = postData.map(post => <Post key={post.id} id={post.id} message={post.message} like={post.like}/>)

    const sendPostMessage = (value: PostMessageFormDataType) => {
        addPost(value.postMessage)
    }

    return (
        <div>
            <AddPostMessageReduxForm onSubmit={sendPostMessage}/>
            {showPost}
        </div>
    );
};

export default MyPosts;

const AddPostForm: FC<InjectedFormProps<PostMessageFormDataType>> = (props: any )=> {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder="What's new?" name="postMessage" component={MyTextArea}
                       validate={[requiredField, maxLength15]}/>
                <button>Add post</button>
            </div>
        </form>
    )
}

export const AddPostMessageReduxForm = reduxForm<PostMessageFormDataType>({
    form: 'dialogPostMessageForm'
})(AddPostForm)

//types
type PostMessageAdderPropsType = {
    postMessageRef: RefObject<HTMLTextAreaElement>
    postTextHandler: (event: ChangeEvent<HTMLTextAreaElement>) => void
    newPostText: string
    onClickPostAddHandler: () => void
}
export type PostMessageFormDataType = {
    postMessage: string
}
