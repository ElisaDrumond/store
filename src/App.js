import React, { useMemo, useCallback } from "react";
import "./App.css";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import UserProfile from "./components/UserProfile";
import { useAppContext } from "./context/AppContext";

function App() {
  const { state, dispatch } = useAppContext();
  const { cart, theme, searchTerm, selectedCategory } = state;

  const addToCart = useCallback(
    (product) => dispatch({ type: "ADD_TO_CART", payload: product }),
    [dispatch]
  );

  const cartIds = useMemo(() => new Set(cart.map((i) => i.id)), [cart]);

  return (
    <div className={`app ${theme}`}>
      <Header />

      <div className="main-content">
        <ProductList
          products={[
            { id: 1, name: "Laptop", price: 999, category: "Electronics" },
            { id: 2, name: "Phone", price: 699, category: "Electronics" },
            { id: 3, name: "Book", price: 29, category: "Education" },
            { id: 4, name: "Headphones", price: 199, category: "Electronics" },
            { id: 5, name: "Tablet", price: 399, category: "Electronics" },
          ]}
          cartIds={cartIds}
          addToCart={addToCart}
          searchTerm={searchTerm}
          selectedCategory={selectedCategory}
          theme={theme}
        />

        <div className="sidebar">
          <Cart theme={theme} />
          <UserProfile theme={theme} />
        </div>
      </div>
    </div>
  );
}

export default App;
