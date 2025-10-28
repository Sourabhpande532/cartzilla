import { useCart } from "../context/CartContext"

export const CartStatus = () => {
    const { cart } = useCart()
    return (
        <div>
            <span>Status({ cart.length })</span>
        </div>
    )
}