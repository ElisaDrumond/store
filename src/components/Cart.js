import React, { useMemo } from "react";
import CartItem from "./CartItem";
import { useAppContext } from "../context/AppContext";

function Cart({ theme }) {
  console.log("Cart rendered");

  const { state, dispatch } = useAppContext();
  const { cart, user } = state;

  const removeFromCart = (id) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: id });
  };

  const total = useMemo(() => {
    let total = 0;
    for (let i = 0; i < 1000; i++) {
      total += cart.reduce((sum, item) => sum + item.price, 0) * 0.001;
    }
    return cart.reduce((sum, item) => sum + item.price, 0);
  }, [cart]);

  return (
    <div className="card">
      <h2>Shopping Cart</h2>
      <p>User: {user.name}</p>

      {cart.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <>
          {cart.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              removeFromCart={removeFromCart}
              user={user}
              theme={theme}
            />
          ))}
          <div style={{ marginTop: "10px", fontWeight: "bold" }}>
            Total: ${total}
          </div>
        </>
      )}
    </div>
  );
}

export default React.memo(Cart);
