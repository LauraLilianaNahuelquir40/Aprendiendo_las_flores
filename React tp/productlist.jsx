import React from 'react';

function ProductList({ products, addToCart }) {
  const productStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '20px',
  };

  const itemStyle = {
    backgroundColor: '#f2f2f2',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  };

  return (
    <div style={productStyle}>
      {products.map((product) => (
        <div style={itemStyle} key={product.id}>
          <h3>{product.title}</h3>
          <p>{product.price} USD</p>
          <button onClick={() => addToCart(product)}>Agregar al carrito</button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;


