import React from 'react';
import ProductCard from '../components/ProductCard';

const products = [
  {
    id: 1,
    name: 'Iridescences Black Tee',
    price: 59.99,
    image: 'https://via.placeholder.com/300x400?text=Black+Hoodie',
  },
  {
    id: 2,
    name: 'White Tee',
    price: 29.99,
    image: 'https://via.placeholder.com/300x400?text=White+Tee',
  },
  {
    id: 3,
    name: 'Pants',
    price: 69.99,
    image: 'https://via.placeholder.com/300x400?text=Cargo+Pants',
  },
];

const Home = ({ addToCart }) => {
  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} addToCart={addToCart} />
      ))}
    </div>
  );
};

export default Home;
