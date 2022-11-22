import { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';

import bag from '../../assets/shopping-bag.svg';
import { CartContext } from '../../contexts/CartContext';
import './Header.scss';

const Header = () => {
  const { cart, setCart, getCartFromLocalStorage } = useContext(CartContext);

  useEffect(() => {
    const data = getCartFromLocalStorage();
    if (data) {
      setCart(data);
    }
  }, []);

  return (
    <header className="header">
      <ul className="container">
        <li>
          <Link to="/shop-cart" className="logo">
            OnlineShop
          </Link>
        </li>
        <li className="cart-icon">
          <Link to="/shop-cart/cart">
            <img src={bag} alt="" width={30} height={30} />
            <div className="total-items">{cart.length}</div>
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
