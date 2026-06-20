import React from 'react';
import useFetch from '../hooks/useFetch';
import ProductCard from '../components/ProductCard';

const JeweleryPage = () => {
    const { data: allProducts, loading, error } = useFetch('https://fakestoreapi.com/products');

    if (loading) return <div className="loader">Filtering jewelery gems...</div>;
    if (error) return <div className="error">Error: {error}</div>;

    const items = Array.isArray(allProducts) ? allProducts : [];
    const filtered = items.filter(p => p?.category?.toLowerCase().includes('jewelery'));

    return (
        <div className="product-grid">
            {filtered.map(product => <ProductCard key={product.id} product={product} />)}
        </div>
    );
};

export default JeweleryPage;