import React, { useState, useEffect } from 'react';
import ProductList from './ProductList';
import Cart from './Cart';

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [totalValue, setTotalValue] = useState(0);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => setProducts(data));
  }, []);

  const addToCart = (product) => {
    const updatedCart = [...cart, product];
    setCart(updatedCart);
    const total = updatedCart.reduce((total, item) => total + item.price, 0);
    setTotalValue(total);
  };

  return (
    <div className="App">
      <header>
        <h1>Lo Mejor</h1>
      </header>
      <div className="container">
        <ProductList products={products} addToCart={addToCart} />
        <Cart cart={cart} totalValue={totalValue} />
      </div>
    </div>
  );
}

export default App;
