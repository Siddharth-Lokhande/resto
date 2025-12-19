import React from 'react';
import Home from './pages/Home';
import { CartProvider } from './context/CartContext';
import Panel from './components/Panel';

function App() {
  return (
    <CartProvider>
      <Home />
      <Panel />
    </CartProvider>
  );
}

export default App;

