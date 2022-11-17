import './Card.scss';
import love from '../../assets/Love.svg';

const Card = ({ item }) => {
  return (
    <div className="card">
      <img className="img" src={item.image} alt={item.title} />
      <h5>{item.title}</h5>
      <span>
        <strong>${item.price}</strong>
      </span>
      <div className="fav">
        <img src={love} alt="favorite item" width={22} height={22} />
      </div>
    </div>
  );
};

export default Card;
