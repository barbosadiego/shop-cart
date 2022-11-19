import { useEffect, useState } from 'react';
import useApi from '../hooks/useApi';
import Card from '../components/card/Card';
import './HomePage.scss';

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const api = useApi();

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
        <h1>New Arrivals</h1>
        <div className="home__grid">
          {products &&
            products.map((item, index) => {
              return <Card item={item} key={index} />;
            })}
        </div>
      </div>
    </section>
  );
};

export default HomePage;
