import PostCard from "./PostCard"
import { useEffect, useState } from "react"
import axios from "axios"

const Main = () => {

    const baseApi = 'http://localhost:3000'
    const [posts, setPosts] = useState([])

    const fetchPosts = () => {
        axios.get(`${baseApi}/posts`)
            .then(res => {
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
            <div className="container border border-primary rounded my-5">
                <h1 className="text-center">Elenco post</h1>
                <div className="row text-center">
                    {posts.map(post => (
                        <PostCard key={post.id} post={post} />
                    ))}

                </div>
            </div>
        </main>
    )
}

export default Main