import React from 'react';
import { Link, Routes, Route, Outlet } from 'react-router-dom';
import ElectronicsPage from './ElectronicsPage';
import JeweleryPage from './JeweleryPage';
import MensClothingPage from './MensClothingPage';
import WomensClothingPage from './WomensClothingPage';

const Categories = () => {
    return (
        <div className="page-container category-page">
            <h1 className="page-title">Explore Categories</h1>

            {/* 1. Persistent Navigation Header Tabs */}
            <div className="category-tabs">
                <Link to="" className="category-tab-btn">⚡ ELECTRONICS</Link>
                <Link to="/categories/jewelery" className="category-tab-btn">✨ JEWELERY</Link>
                <Link to="/categories/mens" className="category-tab-btn">👔 MEN's CLOTHING</Link>
                <Link to="/categories/womens" className="category-tab-btn">👗 WOMEN's CLOTHING</Link>
            </div>

            {/* 2. Inner Nested Routes Engine */}
            <div className="category-content">
                <Routes>
                    {/* Children endpoints nested relative to the parent /categories folder */}
                    <Route path="/" element={<ElectronicsPage />} />
                    <Route path="jewelery" element={<JeweleryPage />} />
                    <Route path="mens" element={<MensClothingPage />} />
                    <Route path="womens" element={<WomensClothingPage />} />
                </Routes>

                {/* 3. The Portal Placeholder where sub-components display */}
                <Outlet />
            </div>
        </div>
    );
};

export default Categories;