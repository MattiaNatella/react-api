

const PostCard = (props) => {
    const { id, title, content, image, tags } = props.post
    const handlerDeletePost = props.onDelete
    return (
        <div className="col-12 col-md-6 col-lg-4 my-2">
            <div className="card border border-success">
                <img src={image} className="card-img-top" alt={title} />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text text-start">{content}</p>
                    <button
                        type="button"
                        className="btn btn-danger text-start"
                        onClick={() => handlerDeletePost(id)}
                    ><i className="fa-solid fa-eraser text-dark pe-2"></i>Elimina post</button>
                </div>
            </div>
        </div >
    )
}

export default PostCard