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
        <Route path="/" component={ProductsList} exact />
        <Route path="/details" component={ProductDetails} />
        <Route path="/basket" component={Basket} />
      </Switch>
    </Router>
  );
}

export default App;
