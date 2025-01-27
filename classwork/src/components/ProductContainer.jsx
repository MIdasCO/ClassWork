import React, { useState, useEffect } from 'react';
import ProductList from './ProductList';

function ProductContainer() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Ошибка - ААА Дима байке, не бейте:', err);
        setLoading(false);
      });
  }, []);

  const handleFilter = (category) => {
    setSelectedCategory(category);
  };

  const filteredProducts =
    selectedCategory === 'All'
      ? products
      : products.filter(
          (item) => item.category.toLowerCase() === selectedCategory.toLowerCase()
        );

  return (
    <ProductList
      products={filteredProducts}
      loading={loading}
      selectedCategory={selectedCategory}
      onFilter={handleFilter}
    />
  );
}

export default ProductContainer;
