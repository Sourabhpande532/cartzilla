import { createContext, useEffect, useState } from "react";

const BookContext = createContext();

const BookProvider = ( { children } ) => {
    const [books, setBooks] = useState( () => {
        try {
            // load data from localstorage when app starts once component mountes;
            const saved = localStorage.getItem( "books" );
            return saved ? JSON.parse( saved ) : []
        } catch ( error ) {
            console.error( "error occured while fetching data", error.message );
            return [];
        }
    } )
    console.log( books );

    useEffect( () => {
        try {
            localStorage.setItem( "books", JSON.stringify( books ) )
        } catch ( error ) {
            console.error( "error saving to localstorage", error.message );
        }
    }, [books] )
    // when books updated useEffect run automatically on every operation add delete toggleStatus;

    const addBooks = ( newBook ) => {
        // update books run useEffect then to save into localStorage 
        setBooks( ( prevBooks ) => [...prevBooks, newBook] )
    }

    const toggleStatus = ( id ) => {
        setBooks( ( prevBooks ) => prevBooks.map( ( book ) => book.id === id ? ( { ...book, status: book.status === "Read" ? "Unread" : "Read" } ) : book ) )
    }

    const deleteBook = ( id ) => {
        setBooks( ( prevBooks ) => prevBooks.filter( ( book ) => book.id !== id ) )
    }
    return (
        <BookContext.Provider value={ { books, addBooks, toggleStatus, deleteBook } }>
            { children }
        </BookContext.Provider>
    )
}

export { BookContext, BookProvider }
