import { createContext, useContext, useState } from "react";
const CartContext = createContext();
export const useCart = () => useContext( CartContext );

export const ContextProvider = ( { children } ) => {
    const [cart, setCart] = useState( [] );
    console.log(cart);
    
    function addToCart( product ) {
        setCart( ( prev ) => [...prev, product])
    }
    return (
        <CartContext.Provider value={ { cart, addToCart } }>
            { children }
        </CartContext.Provider>
    )
}