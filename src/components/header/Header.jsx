import { Link } from 'react-router-dom';

import bag from '../../assets/shopping-bag.svg';
import './Header.scss';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <Link to="/" className="logo">
          FashionShop
        </Link>
        <Link to="/cart">
          <img src={bag} alt="" width={30} height={30} />
        </Link>
      </div>
    </header>
  );
};

export default Header;
