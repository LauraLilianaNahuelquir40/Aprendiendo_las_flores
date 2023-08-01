import React from 'react';

function Cart({ cart, totalValue }) {
  return (
    <div className="cart">
      <h2>Carrito de Compras</h2>
      <p>Información relevante sobre los productos en el carrito</p>
      <p>Valor total: {totalValue} USD</p>
    </div>
  );
}

export default Cart;


