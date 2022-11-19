import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';
import './TableItem.scss';

const TableItem = ({ item }) => {
  const { increaseQuantity, decreaseQuantity, removeFromCart } =
    useContext(CartContext);

  function formatPrice(price) {
    return price.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
    });
  }

  return (
    <div className="table-item grid">
      <div className="data">
        <div className="img">
          <img src={item.image} alt={item.title} />
        </div>
        <div className="info">
          <h4>{item.title}</h4>
          <p>{item.description}</p>
          <button className="btn" onClick={() => removeFromCart(item.id)}>
            Remove
          </button>
        </div>
      </div>
      <p className="price">
        <strong>{formatPrice(item.price)}</strong>
      </p>
      <div className="qty">
        <button onClick={() => decreaseQuantity(item)}>-</button>
        <span>{item.qty}</span>
        <button onClick={() => increaseQuantity(item)}>+</button>
      </div>
      <p className="total">{formatPrice(item.price * item.qty)}</p>
    </div>
  );
};

export default TableItem;
