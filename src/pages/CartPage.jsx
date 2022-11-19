import { useContext } from 'react';
import { Link } from 'react-router-dom';
import TableItem from '../components/table/TableItem';
import { CartContext } from '../contexts/CartContext';

import './CartPage.scss';

const CartPage = () => {
  const { cart, clearCart } = useContext(CartContext);
  // console.log(cart);

  return (
    <section className="cart-page">
      <div className="container">
        <h1>Shooping Cart</h1>
        <div className="cart-page__table">
          <div className="t-head grid">
            <p>product</p>
            <p>price</p>
            <p>quantity</p>
            <p>total</p>
          </div>
          <div className="t-body">
            {cart &&
              cart.map((item, index) => {
                return <TableItem item={item} key={index} />;
              })}
          </div>
          <div className="subtotal">
            <button className="btn" onClick={clearCart}>
              Clear Cart
            </button>
            <div>
              <div className="total-price">
                <h3>Subtotal:</h3>
                <span>
                  <strong>0</strong>
                </span>
              </div>
              <button className="btn checkout">checkout</button>
              <Link to="/">Continue shopping</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartPage;
