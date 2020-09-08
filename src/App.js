import React from 'react';
import { Route, BrowserRouter as Router } from "react-router-dom";
import Home from './components/Home';
import ViewCustomer from './components/ViewCustomer';
import RegisterCustomer from './components/RegisterCustomer';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Single Page Application</h1>
      </header>
      <ul>
        <li>
          <a href="./">Home</a>
        </li><li>
          <a href="./viewCustomers">View Customer</a>
        </li><li>
          <a href="./registerCustomer">Register Customer</a>
        </li>
      </ul>
      <Router>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route exact path="/viewCustomers">
          <ViewCustomer></ViewCustomer>
        </Route>
        <Route exact path="/registerCustomer">
          <RegisterCustomer></RegisterCustomer>
        </Route>
      </Router>
    </div>
  );
}

export default App;
