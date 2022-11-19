import { useContext } from 'react';
import plus from '../../assets/plus.svg';
import deleteIcon from '../../assets/delete.svg';

import './CartPage.scss';
import { CartContext } from '../../contexts/CartContext';

const CartPage = () => {
  const { cart, increaseQuantity, removeFromCart } = useContext(CartContext);

  return (
    <section className="cart-page container">
      <div className="cart-page__items">
        {cart.length === 0 && <p>no items to display</p>}
        {cart &&
          cart.map((item, index) => {
            return (
              <div className="item" key={index}>
                <img src={item.image} alt={item.title} />
                <div className="info">
                  <h4 className="title">{item.title}</h4>
                  <span className="price">${item.price * item.qty}</span>
                  <div className="qty">
                    <button onClick={() => removeFromCart(item.id)}>
                      <img src={deleteIcon} />
                    </button>
                    <span>{item.qty}</span>
                    <button onClick={() => increaseQuantity(item)}>
                      <img src={plus} />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        <div className="total">
          <p>Cart total: </p>
        </div>
      </div>
    </section>
  );
};

export default CartPage;
