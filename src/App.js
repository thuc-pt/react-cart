import React from 'react';
import './App.scss';
import ProductsContainer from './containers/ProductsContainer';
import CartsContainer from './containers/CartsContainer';
import MessagesContainer from './containers/MessagesContainer';

function App() {
  return (
    <div className="container">
      <ProductsContainer />
      <MessagesContainer />
      <CartsContainer />
    </div>
  );
}

export default App;
