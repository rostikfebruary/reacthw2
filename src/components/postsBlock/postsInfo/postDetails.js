const PostDetails = ({postDetails}) => {
    const {userId, id, title, body} = postDetails;
    return (
        <div className={'postDetails'}>
            <div>userId: {userId}</div>
            <div>id: {id}</div>
            <div>title: {title}</div>
            <div>body: {body}</div>
        </div>
    );
};

export {PostDetails};