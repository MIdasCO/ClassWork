import React from 'react';
import { useCart } from './CartContext';

function Cart() {
  const { cart, products, addToCart, removeFromCart, clearCart } = useCart();
  const cartItems = Object.entries(cart);
  const totalPrice = cartItems.reduce((sum, [id, quantity]) => {
    const product = products.find((p) => p.id === parseInt(id));
    return sum + (product ? product.price * quantity : 0);
  }, 0);

  return (
    <div style={{ padding: '10px', border: '1px solid #ccc', marginBottom: '20px' }}>
      <h2>Корзина</h2>
      {cartItems.length === 0 ? (
        <p>Корзина пуста</p>
      ) : (
        <>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {cartItems.map(([id, quantity]) => {
              const product = products.find((p) => p.id === parseInt(id));
              if (!product) return null;
              return (
                <li key={id} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                  <img src={product.image} alt={product.title} style={{ width: '50px', height: '50px', marginRight: '10px' }} />
                  <div style={{ flexGrow: 1 }}>
                    <p>{product.title}</p>
                    <p>${product.price} x {quantity}</p>
                  </div>
                  <button onClick={() => removeFromCart(id)}>-</button>
                  <span style={{ margin: '0 10px' }}>{quantity}</span>
                  <button onClick={() => addToCart(product)}>+</button>
                </li>
              );
            })}
          </ul>
          <p><strong>Общая стоимость: ${totalPrice.toFixed(2)}</strong></p>
          <button onClick={clearCart} style={{ background: 'red', color: 'white', padding: '5px 10px', border: 'none', cursor: 'pointer' }}>
            Очистить корзину
          </button>
        </>
      )}
    </div>
  );
}

export default Cart;
