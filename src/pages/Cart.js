import { useCart } from "../context/CartContext";

export const Cart = () => {
  const { cart } = useCart();
  return (
    <div>
      <h1>Your Cart</h1>
      {cart.length > 0 ? (
        <div>
          {cart.map((item) => {
            return (
              <section
                style={{
                  border: "2px solid black",
                  padding: "20px",
                  marginBottom: "15px",
                }}
                key={item.id}
                className='card p-2 shadow'>
                <h1 className='display-3'>{item.name}</h1>
                <h2>{item.price}</h2>
                <p>{item.details}</p>
              </section>
            );
          })}
        </div>
      ) : (
        <>
          <h2>Your Cart is empty</h2>
        </>
      )}
    </div>
  );
};
