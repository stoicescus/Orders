import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Header from '../../components/Header/Header';
import Customers from '../Customers/Customers';
import Orders from '../Orders/Orders';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <Route exact={true} path="/" component={Customers} />
          <Route path="/edit/:id" component={Orders} />
        </main>
      </div>
    );
  }
}

export default App;
