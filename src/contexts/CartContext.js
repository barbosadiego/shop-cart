import { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  function addToCart(item) {
    const hasId = cart.find((obj) => obj.id === item.id);
    let tempCart;
    if (!hasId) {
      tempCart = [...cart, { ...item, qty: (item.qty = 1) }];
    } else {
      return;
    }
    setCart(tempCart);
  }

  function increaseQuantity(item) {
    const tempCart = cart.map((obj) => {
      if (obj.id === item.id) {
        return { ...obj, qty: obj.qty + 1 };
      } else {
        return obj;
      }
    });
    setCart(tempCart);
  }

  function removeFromCart(id) {
    const tempCart = cart.filter((item) => item.id !== id);
    setCart(tempCart);
  }

  function clearCart() {
    setCart([]);
  }

  return (
    <CartContext.Provider
      value={{ cart, addToCart, clearCart, removeFromCart, increaseQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
};
