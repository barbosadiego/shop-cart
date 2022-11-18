import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useApi from '../../hooks/useApi';

import Card from '../../components/card/Card';
import love from '../../assets/Love.svg';

import './Home.scss';

const Home = () => {
  const api = useApi();
  const [products, setProducts] = useState([]);
  const productsGrid = products.slice(0, 4);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await api.getProducts();
      setProducts(data);
    };

    fetchProducts();
  }, []);

  return (
    <section className="home">
      <div className="container">
        <div className="home__user">
          <h1>Hello User</h1>
          <p>we have some reccommendations for you</p>
        </div>

        <div className="home__main_product">
          <div className="greeting">
            <h2>Just for you</h2>
            <Link to="/">See all</Link>
          </div>
          {products.length && (
            <>
              <div className="item">
                <Link to={`product/${products[0].id}`}>
                  <div className="img">
                    <img src={products[0].image} alt={products[0].title} />
                  </div>
                </Link>
                <h4>{products[0].title}</h4>
                <span>
                  <strong>${products[0].price}</strong>
                </span>
                <p>{products[0].description}</p>
                <div className="fav">
                  <img src={love} alt="favorite item" width={22} height={22} />
                </div>
              </div>
            </>
          )}
        </div>

        <div className="home__grid">
          <div className="info">
            <h3>Details</h3>
            <Link to="/">see all</Link>
          </div>
          <div className="grid-items">
            {productsGrid.map((item, index) => (
              <Link to={`/product/${item.id}`} key={index}>
                <Card item={item} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
