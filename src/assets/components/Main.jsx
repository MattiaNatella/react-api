import PostCard from "./PostCard"
import FormBlog from "./FormBlog"
import { useEffect, useState } from "react"
import axios from "axios"

const Main = () => {


    const defaultFormData = {
        title: '',
        image: '',
        content: '',
        tags: [],
        authorize: false
    }

    const baseApi = 'http://localhost:3000'
    const [posts, setPosts] = useState([])
    const [formData, setFormData] = useState(defaultFormData)


    const handlerDeletePost = (id) => {

        axios.delete(`${baseApi}/posts/${id}`)
            .then(res => {
                fetchPosts()
            })
    }
    const handlerChange = (e) => {

        let { name, value, type } = e.target;

        if (type == 'checkbox') { value = e.target.checked }
        if (type == 'select-one') { value = categories[e.target.value] }

        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handlerChangeTags = (e) => {

        console.log(e.target)
        console.log(e.target.value)


        //     // let { tags, ...others } = formData

        //     // // se è già presente lo escludo dalla lista filtrando per se stesso
        //     // //  if (tags.includes(e.target.value)) {
        //     // //      tags = tags.filter(tag => tag !== e.target.value)
        //     // //  } else {
        //     // //      tags = [...tags, e.target.value]
        //     // //  }

        //     // setFormData({
        //     //     tags,
        //     //     ...others
        //     // })

    }

    const handlerAddPost = (e) => {

        e.preventDefault();
        console.log(formData)

        const tagsArray = formData.tags.split(', ').map(tag => tag.trim())
        console.log(tagsArray)

        const newPost = { ...formData, tags: tagsArray }

        console.log(newPost)


        //chiamata in POST all'API inviando il nuovo elemento
        axios.post(`${baseApi}/posts`, newPost)
            .then(res => {
                //aggiorno lo stato in base alla response del server
                setPosts([res.data, ...posts]);
                //resetto il form
                setFormData(defaultFormData)
            })
    }

    const fetchPosts = () => {
        axios.get(`${baseApi}/posts`)
            .then(res => {
                console.log(res.data)
                setPosts(res.data)
            })
            .catch(error => {
                console.error('Errore durante il caricamento delle pizze:', error)
            })
    }

    useEffect(() => {
        fetchPosts()
    }, [])


    return (
        <main>
            <div className="container">
                <FormBlog handlerChange={handlerChange} handlerChangeTags={handlerChangeTags} handlerAddPost={handlerAddPost} formData={formData} />
            </div>
            <div className="container border border-primary rounded my-5">
                <h1 className="text-center">Elenco post</h1>
                <div className="row text-center">
                    {posts.map(post => (
                        <PostCard key={post.id} post={post} onDelete={handlerDeletePost} />
                    ))}

                </div>
            </div>
        </main>
    )
}

export default Main