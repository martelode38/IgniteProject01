const Post = (props) =>{
    return(
    <div> 
        <h3>{props.author}</h3>
        <p>{props.content}</p>

    </div>
    )
}

export default Post;