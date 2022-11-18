import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useApi from '../../hooks/useApi';
import user from '../../assets/Icon.svg';
import { CartContext } from '../../contexts/CartContext';
import './ProductPage.scss';

const ProductPage = () => {
  const [product, setProduct] = useState();
  const [coments, setComments] = useState();
  const { id } = useParams();
  const api = useApi();
  const { cart, addToCart } = useContext(CartContext);

  useEffect(() => {
    const data = async () => {
      const res = await api.getSingleProduct(id);
      setProduct(res);
    };
    const userComents = async () => {
      const res = await api.getComments();
      setComments(res.comments);
    };
    data();
    userComents();
  }, []);

  function handleCart(item) {
    console.log('add to cart');
    addToCart(item);
  }

  // console.log(cart);
  return (
    <section className="product-page container">
      {product && (
        <>
          <div className="product-page__image">
            <img src={product.image} alt={product.title} />
          </div>
          <div className="product-page__info">
            <h4>{product.title}</h4>
            <span>
              <strong>${product.price}</strong>
            </span>
          </div>
          <p>{product.description}</p>
          <button className="btn" onClick={() => handleCart(product)}>
            + Add to cart
          </button>
          <div className="product-page__reviews">
            <h3>Reviews</h3>
            <div className="reviews-area">
              {coments &&
                coments.map((item, index) => {
                  return (
                    <div className="item" key={index}>
                      <div className="user">
                        <img src={user} alt="" />
                        <h2>{item.user.username}</h2>
                      </div>
                      <p>{item.body}</p>
                    </div>
                  );
                })}
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default ProductPage;
