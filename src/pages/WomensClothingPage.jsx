import React from 'react';
import useFetch from '../hooks/useFetch';
import ProductCard from '../components/ProductCard';

const WomensClothingPage = () => {
    const { data: allProducts, loading, error } = useFetch('https://fakestoreapi.com/products');

    if (loading) return <div className="loader">Filtering women's boutique...</div>;
    if (error) return <div className="error">Error: {error}</div>;

    const items = Array.isArray(allProducts) ? allProducts : [];
    const filtered = items.filter(p => p?.category?.toLowerCase().includes("women's"));

    return (
        <div className="product-grid">
            {filtered.map(product => <ProductCard key={product.id} product={product} />)}
        </div>
    );
};

export default WomensClothingPage;