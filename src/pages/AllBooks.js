import { useContext } from "react"
import { BookContext } from "../context/BookContext"

export const AllBooks = () => {
    const { books, toggleStatus, deleteBook } = useContext( BookContext );
    return (
        <div>
            <h1>Your book library</h1>
            { books.length === 0 ? (
                <p>No book found.</p>
            ) : (
                books.map( ( book ) => (
                    <div key={ book.id } style={ { border: "solid 2px black", padding: "10px", marginBottom: "20px" } }>
                        <h1 className="display-3">
                            Title: { book.title }</h1>
                        <p>Author: { book.author }</p>
                        <p>Status: { book.status }</p>
                        <button onClick={ () => toggleStatus( book.id ) }>Mark as { book.status === "Read" ? "Unread" : "Read" }</button>
                        <button onClick={ () => deleteBook( book.id ) } style={ { marginLeft: "15px", color: "red" } }>Delete</button>
                    </div>
                ) )
            ) }
        </div>
    )
}