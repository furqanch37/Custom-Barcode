// app/products/page.jsx or components/ProductBarcodes.jsx
"use client";
import React, { useEffect, useState } from "react";
import Barcode from "react-barcode";

const ProductBarcodes = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("https://raasid-back-end.vercel.app/api/products/all");
        const data = await res.json();
        if (data.success) {
          setProducts(data.products);
        }
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Product Barcodes</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product._id}
            className="border p-4 rounded shadow text-center"
          >
            <h2 className="font-semibold">{product.name}</h2>
            <p className="mb-2">Price: Rs {product.price}</p>
            <Barcode
              value={`${product.name} - Rs ${product.price}`}
              width={2}
              height={80}
              fontSize={14}
              displayValue={false}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductBarcodes;