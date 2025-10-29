import { useCart } from "../context/CartContext"

export const Cart = () => {
    const { cart } = useCart();
    return (
        <div>
            <h1>Your Cart</h1>
            { cart.length > 0 ? (
                <div>
                    { cart.map( ( item ) => {
                       return <section key={ item.id }>
                            <h1>{ item.name }</h1>
                            <h2>{ item.price }</h2>
                            <p>{ item.details }</p>
                            <hr/>
                        </section>
                    } ) }
                </div>
            ) : ( <>
                <h2>Your Cart is empty</h2>
            </> ) }
        </div>
    )
}