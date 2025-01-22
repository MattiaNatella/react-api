

const PostCard = (props) => {
    const { id, title, content, image, tags } = props.post
    return (
        <div className="col-12 my-2">
            <div className="card border border-success">
                <img src={image} className="card-img-top" alt={title} />
                <div className="card-body">
                    <h5 class="card-title">{title}</h5>
                    <p className="card-text text-start">{content}</p>
                </div>
            </div>
        </div >
    )
}

export default PostCard