import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import ProductsList from './pages/Main';
import ProductDetails from './pages/ItemPage';
import Basket from './pages/Basket';
import WishList from './pages/WishList';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <ProductsList />
        </Route>
        <Route path="/details">
          <ProductDetails />
        </Route>
        <Route path="/basket">
          <Basket />
        </Route>
        <Route path="/wishlist">
          <WishList />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
