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
    // console.log( books );

    useEffect( () => {
        try {
            localStorage.setItem( "books", JSON.stringify( books ) )
        } catch ( error ) {
            console.error( "error saving to localstorage", error.message );
        }
    }, [books] )
    // when books updated useEffect run automatically on every operation add delete toggleStatus;

    const addBooks = ( newBook ) => {
        // update books run useEffect then to save into localStorage here setBooks update books in state 
        setBooks( ( prevBooks ) => [...prevBooks, newBook] )
    }

    // Update array those id matches & return new array 
    // setBooks update state i.e books 
    const toggleStatus = ( id ) => {
        setBooks( ( prevBooks ) => prevBooks.map( ( book ) => book.id === id ? ( { ...book, status: book.status === "Read" ? "Unread" : "Read" } ) : book ) )
    }
    /*Optional code to understand
     const toggleStatus = (id) => {
  // 1️⃣ get the latest list of books
  setBooks((prevBooks) => {
    // 2️⃣ make a new empty array (we will fill it)
    const updatedBooks = [];

    // 3️⃣ go through each book
    for (let b of prevBooks) {
      // 4️⃣ if the book’s id matches the one we clicked
      if (b.id === id) {
        // 5️⃣ make a copy of the book and flip its status
        const updatedBook = {
          ...b,
          status: b.status === "Read" ? "Unread" : "Read",
        };
        // 6️⃣ add the updated book to the new array
        updatedBooks.push(updatedBook);
      } else {
        // 7️⃣ if it’s not the one we clicked, keep it as it is
        updatedBooks.push(b);
      }
    }

    // 8️⃣ finally, return the new list to React
    return updatedBooks;
  });
};
 */

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
