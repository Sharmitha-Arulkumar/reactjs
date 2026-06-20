import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';

const ProductCard = ({ product }) => {
  const { dispatch } = useContext(ShopContext);

  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} />
      <div className="product-info">
        <h3>{product.title}</h3>
    <p className="category">{product.category}</p>
        <p className="price">${product.price.toFixed(2)}</p>
        <button onClick={() => dispatch({ type: 'ADD_TO_CART', payload: product })}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;   