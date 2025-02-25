import React from 'react';
import { useCart } from './CartContext';
import Spinner from './Spinner';
import './ProductList.css';

function ProductList({ products, loading, selectedCategory, onFilter }) {
  const categories = ['All', "Men's Clothing", "Women's Clothing", 'Electronics', 'Jewelery'];
  const { cart, addToCart, removeFromCart } = useCart();

  if (loading) return <Spinner />;

  return (
    <div>
      <div style={{ marginBottom: '20px' }}>
        {categories.map((category) => (
          <button
            key={category}
            className={`filter-button ${selectedCategory === category ? 'active' : ''}`}
            onClick={() => onFilter(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {products.map((product) => {
          const quantity = cart[product.id] || 0;

          return (
            <div key={product.id} style={{ width: '200px', border: '1px solid #ddd', borderRadius: '4px', margin: '10px', padding: '10px', position: 'relative' }}>
              <img src={product.image} alt={product.title} style={{ width: '100%', height: '200px', objectFit: 'contain' }} />
              <h4 style={{ fontSize: '14px', margin: '10px 0' }}>{product.title}</h4>
              <p style={{ margin: 0, fontWeight: 'bold' }}>${product.price}</p>
              <p style={{ margin: 0, fontStyle: 'italic' }}>{product.category}</p>

              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
                {quantity > 0 ? (
                  <>
                    <button onClick={() => removeFromCart(product.id)}>-</button>
                    <span>{quantity}</span>
                    <button onClick={() => addToCart(product)}>+</button>
                  </>
                ) : (
                  <button onClick={() => addToCart(product)}>Добавить в корзину</button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProductList;
