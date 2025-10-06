import React, { createContext, useReducer, useContext } from "react";

const initialState = {
  user: { name: "Elisa", email: "elisa@example.com" },
  theme: "light",
  cart: [],
  searchTerm: "",
  selectedCategory: "All",
};

function appReducer(state, action) {
  switch (action.type) {
    case "TOGGLE_THEME":
      return { ...state, theme: state.theme === "light" ? "dark" : "light" };

    case "SET_SEARCH":
      return { ...state, searchTerm: action.payload };

    case "SET_CATEGORY":
      return { ...state, selectedCategory: action.payload };

    case "UPDATE_USER":
      return { ...state, user: action.payload };

    case "ADD_TO_CART":
      return { ...state, cart: [...state.cart, { ...action.payload, quantity: 1 }] };

    case "REMOVE_FROM_CART":
      return { ...state, cart: state.cart.filter(item => item.id !== action.payload) };

    default:
      return state;
  }
}

const AppContext = createContext();

export function AppProvider({ children }) {
  const [state, dispatch] = useReducer(appReducer, initialState);
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}

export const useAppContext = () => useContext(AppContext);
