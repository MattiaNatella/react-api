

const PostCard = (props) => {
    const { id, title, content, image, tags } = props.post
    return (
        <div className="col-12 my-2">
            <div className="card border border-success">
                <img src='https://placehold.co/100x50' className="card-img-top" alt={title} />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text text-start">{content}</p>
                    <button type="button" className="btn btn-danger text-start"><i className="fa-solid fa-eraser text-dark pe-2"></i>Elimina post</button>
                </div>
            </div>
        </div >
    )
}

export default PostCard