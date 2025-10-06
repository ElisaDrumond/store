import React, { useCallback } from "react";
import { useAppContext } from "../context/AppContext";
import SearchBar from "./SearchBar";
import CategoryFilter from "./CategoryFilter";
import ThemeToggle from "./ThemeToggle";

function Header() {
  const { state, dispatch } = useAppContext();
  const { user, cart, searchTerm, selectedCategory, theme } = state;

  const setSearchTerm = useCallback(
    (v) => dispatch({ type: "SET_SEARCH", payload: v }),
    [dispatch]
  );
  const setSelectedCategory = useCallback(
    (v) => dispatch({ type: "SET_CATEGORY", payload: v }),
    [dispatch]
  );
  const toggleTheme = useCallback(
    () => dispatch({ type: "TOGGLE_THEME" }),
    [dispatch]
  );

  return (
    <header className={`header ${theme}`}>
      <h1>E-Commerce Store</h1>

      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} theme={theme} />
      <CategoryFilter
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        theme={theme}
      />
      <ThemeToggle theme={theme} toggleTheme={toggleTheme} />

      <div>
        Welcome, {user.name}! Cart: {cart.length} items
        <span style={{ marginLeft: "10px", fontSize: "12px", opacity: 0.6 }}>
          Random: {Math.random().toFixed(5) * 10000}
        </span>
      </div>
    </header>
  );
}

export default React.memo(Header);
