import { useEffect, useState } from "react"



const FormBlog = (props) => {

    let { formData, handlerChange, handlerAddPost } = props

    useEffect(() => {

        if (formData.authorize) {
            alert('Attenzione: il post verrà pubblicato')
        }
    }, [formData.authorize])

    return (
        <>
            <div className="container text-center text-white my-5 p-2">
                <div className="row justify-content-center">
                    <div className="col-6">
                        <form action="#" onSubmit={handlerAddPost}>
                            <h1>Nuovo post</h1>
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
                </div>
            </div >
        </>
    )

}

export default FormBlog