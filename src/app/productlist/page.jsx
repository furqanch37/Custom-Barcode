'use client';
import React, { useEffect, useState } from 'react';
import './ProductList.css';
import CanvasBarcode from './CustomBarcode';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://raasid.com/api/products?size=126')
      .then((res) => res.json())
      .then((data) => setProducts(data.products || []))
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
