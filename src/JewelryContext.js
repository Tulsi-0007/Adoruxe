// JewelryContext.js
import { createContext, useContext, useState } from 'react';

const JewelryContext = createContext();

export function JewelryProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [favorites, setFavorites] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const removeFromCart = (itemId) => {
    setCart(cart.filter(item => item.id !== itemId));
  };

  const addToFavorites = (item) => {
    setFavorites([...favorites, item]);
  };

  const removeFromFavorites = (itemId) => {
    setFavorites(favorites.filter(item => item.id !== itemId));
  };

  return (
    <JewelryContext.Provider value={{ cart, favorites, addToCart, removeFromCart, addToFavorites, removeFromFavorites }}>
      {children}
    </JewelryContext.Provider>
  );
}

export const useJewelry = () => useContext(JewelryContext);