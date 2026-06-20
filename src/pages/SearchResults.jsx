import React from 'react';
import { useSearchParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import ProductCard from '../components/ProductCard';

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q')?.toLowerCase() || '';
  const { data: products, loading, error } = useFetch('https://fakestoreapi.com/products');

  if (loading) return <div className="loader">Searching products...</div>;
  if (error) return <div className="error">Error: {error}</div>;
 const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(query) || 
    product.description.toLowerCase().includes(query)  ||
    product.category.toLowerCase().includes(query)
  );
  
  return (
    <div className="page-container">
      <h1 className="page-title">Search Results for "{searchParams.get('q')}"</h1>
      {filteredProducts.length === 0 ? (
        <p className="no-results">No products found matching your search term.</p>
      ) : (
        <div className="product-grid">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
           </div>
      )}
    </div>
  );
};

export default SearchResults;