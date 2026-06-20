import React from 'react';
import useFetch from '../hooks/useFetch';
import ProductCard from '../components/ProductCard';

const Home = () => {
  const { data: products, loading, error } = useFetch('https://fakestoreapi.com/products');

  if (loading) return <div className="loader">Loading amazing products...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  return (
    <div className="page-container">
      {/* <h1 className="page-title">All Products</h1> */}
      <div className="product-grid">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;