import { Routes, Route } from 'react-router-dom';

import Home from './pages/home/Home';
import Produtc from './pages/product_single/ProductPage';
import Cart from './pages/cart/CartPage';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<Produtc />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
