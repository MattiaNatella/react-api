import PostCard from "./PostCard"

const Main = () => {
    return (
        <main>

            <div className="container border border-primary rounded my-5">
                <h1 className="text-center">Elenco post</h1>
                <div className="row">
                    <PostCard />
                    <PostCard />
                    <PostCard />
                </div>
            </div>
        </main>
    )
}

export default Main