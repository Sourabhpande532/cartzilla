import { createContext, useContext, useEffect, useState } from "react";
const CartContext = createContext();
export const useCart = () => useContext( CartContext );

export const ContextProvider = ( { children } ) => {
    // earlier either use this or below localStorage code both work
    // const [cart, setCart] = useState( [] );
    // console.log(cart);
    const [cart, setCart] = useState( () => {
        try {
            const saved = localStorage.getItem( "cart" );
            return saved ? JSON.parse( saved ) : []
        } catch ( error ) {
            console.error( "fetching error", error.message );
            return [];
        }
    } )

    useEffect( () => {
        try {
            localStorage.setItem( "cart", JSON.stringify( cart ) )
        } catch ( error ) {
            console.error( "Crashing error", error.message );
        }
    }, [cart] )


    function addToCart( product ) {
        setCart( ( prev ) => [...prev, product] )
    }
    return (
        <CartContext.Provider value={ { cart, addToCart } }>
            { children }
        </CartContext.Provider>
    )
}

/* https://codesandbox.io/p/sandbox/addtocart-9xkf2x */