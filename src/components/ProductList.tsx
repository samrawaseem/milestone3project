'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
};

const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch('/api/products');
      const data = await res.json();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {products.map((product) => (
        <div key={product.id} className="bg-white p-4 rounded-lg shadow-md">
          <Image
            src={product.image}
            alt={product.title}
            height={300}
            width={250}
            className="w-full h-48 object-cover rounded-md"
          />
          <h3 className="mt-4 font-bold text-lg">{product.title}</h3>
          <p className="text-gray-700 text-sm">{product.description}</p>
          <p className="mt-2 font-semibold text-lg">${product.price}</p>
          <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
