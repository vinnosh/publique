import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const allProducts = [
  {
    id: 1,
    name: 'Iridescences Black Tee',
    price: 59.99,
    image: 'https://via.placeholder.com/600x800?text=Black+Hoodie',
    description: 'Cozy oversized black tee made with organic cotton.',
  },
  {
    id: 2,
    name: 'White Tee',
    price: 29.99,
    image: 'https://via.placeholder.com/600x800?text=White+Tee',
    description: 'Clean-cut white t-shirt — fits with everything.',
  },
  {
    id: 3,
    name: 'Cargo Pants',
    price: 69.99,
    image: 'https://via.placeholder.com/600x800?text=Cargo+Pants',
    description: 'Durable, modern fit cargo pants with utility pockets.',
  },
];

const ProductDetail = ({ addToCart }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const product = allProducts.find((p) => p.id === parseInt(id));

  if (!product) return <p>Product not found</p>;

  return (
    <div className="product-detail">
      <img src={product.image} alt={product.name} />
      <div className="detail-info">
        <h2>{product.name}</h2>
        <p>RM{product.price.toFixed(2)}</p>
        <p>{product.description}</p>
        <button onClick={() => { addToCart(product); navigate('/'); }}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
