import React from 'react';
import "./global.css";
import Login from "./pages/Login/index"
import ShoppingList from './pages/shoppingList';
import MeuCarrinho from './pages/MeuCarrinho';

function App() {

  return (
    <div id = "global-spacing"> 
      <MeuCarrinho/>
    </div> 
  );
}

export default App;
