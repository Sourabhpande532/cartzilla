import { useContext } from "react";
import { useCart } from "../context/CartContext";
import { ThemeContext } from "../context/ThemeContext";

const productList = [
    {
        id: 1,
        name: "Laptop",
        price: "49k",
        details: "512ssd,8Gb RAM",
    },
    {
        id: 2,
        name: "Smartphone",
        price: "30k",
        details: "32Gb internal,8Gb RAM",
    },
    {
        id: 3,
        name: "Touch pad",
        price: "2k",
        details: "12mp front, 32pxe back",
    },
    {
        id: 4,
        name: "LED 23'",
        price: "32k",
        details: "Made with samsung, +hotstar,wify, usb",
    },
];
export const ProductListings = () => {
    const { addToCart } = useCart()
    const {theme} = useContext(ThemeContext)
    return (
        <div style={ { backgroundColor: theme === "light" ? "white" : "black", color: theme === 'light' ? "black": "pink" } }>
            <h1>List of project</h1>
            { productList.map( ( product ) =>
            (
                <div key={ product.id }>
                    <h1>{ product.name }</h1>
                    <h2>{ product.price }</h2>
                    <p>{ product.details }</p>
                    <button className="btn btn-outline-primary" onClick={ () => addToCart( product ) }>Add To Cart</button>
                </div>
            ) ) }
        </div>
    )
}