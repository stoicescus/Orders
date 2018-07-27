import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Header from '../../components/Header/Header';
import Customers from '../Customers/Customers';
import EditOrder from '../../components/EditOrder/EditOrder';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <Route exact={true} path="/" component={Customers} />
          <Route path="/edit/:id" component={EditOrder} />
        </main>
      </div>
    );
  }
}

export default App;
