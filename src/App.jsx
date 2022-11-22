import { Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './pages/HomePage';
import Cart from './pages/CartPage';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/shop-cart" element={<Home />} />
          <Route path="/shop-cart/cart" element={<Cart />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
