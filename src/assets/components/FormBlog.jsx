import { useEffect, useState } from "react"



const FormBlog = (props) => {

    let { formData, handlerChange, handlerAddPost, handlerChangeTags } = props

    //**React Blog Form Multifield**

    // const categories = [
    //     'Fishing',
    //     'Cooking',
    //     'Skiing',
    //     'Trekking',
    //     'Hiking'
    // ]

    // const arrayTags = [
    //     { id: 1, name: 'fun' },
    //     { id: 2, name: 'travel' },
    //     { id: 3, name: 'friends' },
    //     { id: 4, name: 'outdoor' },
    //     { id: 5, name: 'sun' }
    // ]



    useEffect(() => {

        if (formData.authorize) {
            alert('Attenzione: il post verrà pubblicato')
        }
    }, [formData.authorize])

    // const deleteTitle = (index) => {
    //     const filteredTitles = titles.filter(title => title !== titles[index])
    //     setTitles(filteredTitles)
    // }

    return (
        <>
            <div className="container text-center  my-5 p-2">
                <div className="row justify-content-center">
                    <div className="col-6">
                        <form action="#" onSubmit={handlerAddPost}>
                            <h1>Nuovo post INSTAGRAM</h1>
                            <h2>Titolo</h2>
                            <div className="input-group mb-3">
                                {/*TITOLO BLOG */}

                                <input
                                    name="title"
                                    type="text"
                                    className="form-control"
                                    placeholder="Titolo Blog"
                                    value={formData.title}
                                    onChange={handlerChange}
                                />
                            </div>

                            {/* IMMAGINE */}
                            <h2>Immagine</h2>
                            <div className="input-group">
                                <input
                                    type="text"
                                    placeholder="URL immagine"
                                    className="form-control"
                                    name="image"
                                    value={formData.image}
                                    onChange={handlerChange}
                                />
                            </div>
                            {/* CONTENUTO */}
                            <h2>Content</h2>
                            <div className="input-group">
                                <textarea className="form-control" placeholder="Inserisci il contenuto del post" name="content" value={formData.content} onChange={handlerChange} />
                            </div>
                            {/* CATEGORIA (SELECT) */}
                            {/* <h2>Categoria</h2>
                            <select className="form-select" name="category" defaultValue="" onChange={handlerChange}>
                                <option selected>Scegli la categoria</option>
                                {categories.map((category, index) => (
                                    <option key={`key-${index}`} value={index}>{category}</option>
                                ))} 


                        </select>*/}
                            {/*TAGS*/}
                            <h2>TAGS</h2>

                            <div className="input-group">
                                <input
                                    type="text"
                                    placeholder="Inserisci i tags separati da ,"
                                    className="form-control"
                                    name="tags"
                                    value={formData.tags}
                                    onChange={handlerChange}
                                />
                            </div>

                            {/* STATO PUBBLICAZIONE */}
                            <div className="form-check form-switch text-start">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    role="switch"
                                    name="authorize"
                                    value={formData.authorize}
                                    onChange={handlerChange}
                                />
                                <label className="form-check-label" >Pubblica</label>
                            </div>

                            <button className="btn btn bg-primary text-white" type="submit" id="">Invia</button>
                        </form>
                    </div>
                    {/* CARD DEL POST
                    <div className="col-12">
                        {posts.length > 0 ? (
                            <>
                                {
                                    posts.map(post => (
                                        <div className="card">
                                            <img src={post.image} className="card-img-top" alt="Immagine post" />
                                            <div className="card-body">
                                                <h5 className="card-title">{post.title}</h5>
                                                <p className="card-text">{post.content}</p>
                                                <a href="#" className="btn btn-primary disabled">{post.authorize ? 'Pubblicato' : 'Bozza'}</a>
                                            </div>
                                        </div>
                                    ))
                                }

                            </>
                        )

                            :
                            <h3>Nessun post</h3>
                        }
                    </div> */}



                </div>
            </div >
        </>
    )

}

export default FormBlog