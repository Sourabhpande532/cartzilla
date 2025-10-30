import { useContext, useState } from "react"
import { BookContext } from "../context/BookContext";
import { useNavigate } from "react-router-dom";


export const AddBooks = () => {
    const { addBooks } = useContext( BookContext )
    const [title, setTitle] = useState( '' );
    const [author, setAuthor] = useState( '' );
    const [status, setStatus] = useState( "Unread" );
    const navigate = useNavigate();
    console.log( title, author, status );
    const handleSubmit = ( e ) => {
        e.preventDefault()
        if ( !title || !author ) return alert( "Please fill this input filds." )
        const newBook = {
            id: Date.now(),
            title,
            author,
            status
        }
        addBooks( newBook )
        navigate("/books")
    }
    return (
        <div>
            <h1>Add New Books</h1>
            <form onSubmit={ handleSubmit }>
                <div style={ { marginBottom: "20px" } }>
                    <label>Title:</label>
                    <input
                        type="text"
                        value={ title }
                        className="form-control"
                        onChange={ ( e ) => setTitle( e.target.value ) } />
                </div>
                <div style={ { marginBottom: "20px" } }>
                    <label>Author:</label><br />
                    <input
                        type="text"
                        value={ author }
                        className="form-control"
                        onChange={ ( e ) => setAuthor( e.target.value ) }
                    />
                </div>
                <div style={ { marginBottom: "20px" } }>
                    <select className="form-select" value={ status } onChange={ ( e ) => setStatus( e.target.value ) }>
                        <option value="Read">Read</option>
                        <option value="Unread">Unread</option>
                    </select>
                </div>
                <button className="btn btn-primary" type="submit">Submit</button>
            </form>
        </div>
    )
}