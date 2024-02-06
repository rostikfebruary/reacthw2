

const PostOfUser = ({userPost, currentPost}) => {
    const {id, title} = userPost;
    console.log(userPost)
    return (
        <div className={'usersPosts'}>
            <div>id: {id}</div>
            <div>title: {title}</div>
            <button onClick={() => currentPost(userPost)}>Details</button>
        </div>
    );
};

export {PostOfUser};