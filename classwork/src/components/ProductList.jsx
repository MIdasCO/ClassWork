import React from 'react';
import Spinner from './Spinner';
import './ProductList.css';

function ProductList({ products, loading, selectedCategory, onFilter }) {
  const categories = ['All', "Men's Clothing", "Women's Clothing", 'Electronics', 'Jewelery'];

  if (loading) {
    return <Spinner />;
  }

  return (
    <div>
      <div style={{ marginBottom: '20px' }}>
        {categories.map((category) => {
          const isActive = selectedCategory === category;
          return (
            <button
              key={category}
              className={`filter-button ${isActive ? 'active' : ''}`}
              onClick={() => onFilter(category)}
            >
              {category}
            </button>
          );
        })}
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {products.map((product) => (
          <div
            key={product.id}
            style={{
              width: '200px',
              border: '1px solid #ddd',
              borderRadius: '4px',
              margin: '10px',
              padding: '10px'
            }}
          >
            <img
              src={product.image}
              alt={product.title}
              style={{ width: '100%', height: '200px', objectFit: 'contain' }}
            />
            <h4 style={{ fontSize: '14px', margin: '10px 0' }}>{product.title}</h4>
            <p style={{ margin: 0, fontWeight: 'bold' }}>${product.price}</p>
            <p style={{ margin: 0, fontStyle: 'italic' }}>{product.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
