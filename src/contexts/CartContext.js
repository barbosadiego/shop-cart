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
    saveCartToLocalStorage(tempCart);
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
    saveCartToLocalStorage(tempCart);
  }

  function decreaseQuantity(item) {
    if (item.qty > 1) {
      const tempCart = cart.map((obj) => {
        if (obj.id === item.id) {
          return { ...obj, qty: obj.qty - 1 };
        } else {
          return obj;
        }
      });
      setCart(tempCart);
      saveCartToLocalStorage(tempCart);
    }
  }

  function removeFromCart(id) {
    const tempCart = cart.filter((item) => item.id !== id);
    setCart(tempCart);
    saveCartToLocalStorage(tempCart);
  }

  function clearCart() {
    setCart([]);
    saveCartToLocalStorage([]);
  }

  function saveCartToLocalStorage(cartData) {
    localStorage.setItem('online-shop', JSON.stringify(cartData));
  }

  function getCartFromLocalStorage() {
    return JSON.parse(localStorage.getItem('online-shop'));
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        addToCart,
        clearCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        getCartFromLocalStorage,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
