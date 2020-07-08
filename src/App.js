import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import './App.css';
import ProductsList from './pages/ProductsList';
import ProductDetails from './pages/ProductDetails';
import Basket from './pages/Basket';


function App() {
   
  return (
    <Router>
      <Switch>
        <Route path="/" exact >
          <ProductsList />
        </Route>
        <Route path="/details">
          <ProductDetails/>
        </Route>
        <Route path="/basket" component={Basket} />
      </Switch>
    </Router>
  );
}

export default App;
