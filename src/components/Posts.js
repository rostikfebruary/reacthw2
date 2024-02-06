import {useEffect, useState} from "react";
import {postService} from "./services/postService";
import {PostOfUser} from "./postsBlock/usersPost/postOfUser";
import axios from "axios";
import jsonURL from '../components/jsonURL/urls';
import {PostDetails} from "./postsBlock/postsInfo/postDetails";

const Posts = () => {
    const [posts, setPosts] = useState([]);
    const [postDetails, setPostDetails] = useState(null);


    useEffect(() => {
        postService.getAll().then(({data})=> setPosts(data))
    }, []);



    const getCurrentPost = () =>{
        postService.getAll().then(({data}) => setPosts(data))
    }

    const currentPost =(post) =>{
        setPostDetails(post)
    }

    return (
        <div>
            {posts.map(userPost => <PostOfUser key={userPost.id} userPost={userPost} currentPost={currentPost}  />)}
            <hr/>
            {postDetails !== null && <PostDetails postDetails={postDetails}/>}
        </div>
    );
};

export default Posts;