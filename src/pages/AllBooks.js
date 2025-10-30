import { useContext, useState } from "react"
import { BookContext } from "../context/BookContext"

export const AllBooks = () => {
    const { books, toggleStatus, deleteBook } = useContext( BookContext );
    const [filter, setFilter] = useState( "All" );
    const filteredBooks = filter === "All" ? books : books.filter( ( book ) => book.status === filter )
    // console.log( filteredBooks );

    return (
        <div>
            <h1>Your book library</h1>
            <button className="btn btn-info" style={ { marginLeft: "12px" } } onClick={ () => setFilter( "All" ) }>All({ books.filter( ( book ) => book.status ).length })</button>
            <button className="btn btn-info" style={ { marginLeft: "12px" } } onClick={ () => setFilter( "Read" ) }>Read({ books.filter( ( book ) => book.status === "Read" ).length })</button>
            <button className="btn btn-info" style={ { marginLeft: "12px" } } onClick={ () => setFilter( "Unread" ) }>Unread({ books.filter( ( book ) => book.status === "Unread" ).length })</button>
            <br/><br/>
            { filteredBooks.length === 0 ? (
                <p>No book found.</p>
            ) : (
                filteredBooks.map( ( book ) => (
                    <div key={ book.id } style={ { border: "solid 2px black", padding: "10px", marginBottom: "20px" } }>
                        <h1 className="display-3">
                            Title: { book.title }</h1>
                        <p>Author: { book.author }</p>
                        <p>Status: { book.status }</p>
                        <button className="btn btn-outline-success" onClick={ () => toggleStatus( book.id ) }>Mark as { book.status === "Read" ? "Unread" : "Read" }</button>
                        <button className="btn btn-outline-danger" onClick={ () => deleteBook( book.id ) } style={ { marginLeft: "15px", color: "red" } }>Delete</button>
                    </div>
                ) )
            ) }
        </div>
    )
}