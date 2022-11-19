import { Link } from 'react-router-dom';

import bag from '../../assets/shopping-bag.svg';
import './Header.scss';

const Header = () => {
  return (
    <header className="header">
      <ul className="container">
        <li>
          <Link to="/" className="logo">
            OnlineShop
          </Link>
        </li>
        <li>
          <Link to="/cart">
            <img src={bag} alt="" width={30} height={30} />
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
