import { useCart } from "../context/CartContext"

export const CartStatus = () => {
    const { cart } = useCart()
    return (
        <span style={ { fontWeight: "bold" } }>
            🛒 { cart.length } item{ cart.length !== 1 ? "s" : "" }</span>
    )
}