'use client';
import React, { useEffect, useState } from 'react';
import './ProductList.css';
import CanvasBarcode from './CustomBarcode';

const ProductList = () => {
  const [products, setProducts] = useState([]);

 useEffect(() => {
  fetch('https://raasid-back-end.vercel.app/api/products/all')
    .then((res) => res.json())
    .then((data) => {
      const fetchedProducts = data.products || [];

      // Define your hardcoded product
      const hardcodedProduct = {
        _id: 'hardcoded-chicken-karahi',
        name: 'Chicken Karahi',
        price: 1200,
        image: 'https://via.placeholder.com/150', // optional image URL
        category: 'Karahi',
        description: 'Delicious traditional Chicken Karahi',
      };

      // Set the combined product list
      setProducts([hardcodedProduct, ...fetchedProducts]);
    })
    .catch((err) => console.error('Error fetching products:', err));
}, []);

  return (
    <div className="product-wrapper">
      <h2 className="product-heading">Product List with Barcodes</h2>
      <ol className="product-list">
        {products.map((product, idx) => (
          <li key={product.id || idx} className="product-item">
            <div>
              <strong>{product.name}</strong>
              {product.price && (
                <span className="product-price">Rs. {product.price}</span>
              )}
              <div style={{ width: '380px', marginTop: '8px' }}>
                <CanvasBarcode
                  value={`${product.name} - Rs. ${product.price}`} // 👈 Full details for scan
                />
              </div>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default ProductList;
