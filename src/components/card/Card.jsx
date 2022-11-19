import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';
import './Card.scss';

const Card = ({ item }) => {
  const { addToCart } = useContext(CartContext);

  function formatPrice(price) {
    return price.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
    });
  }

  return (
    <div className="item card">
      <h3>{item.title}</h3>
      <img src={item.image} alt={item.title} />
      <p>
        <strong>{formatPrice(item.price)}</strong>
      </p>
      <button className="btn" onClick={() => addToCart(item)}>
        Add to Cart
      </button>
    </div>
  );
};

export default Card;
