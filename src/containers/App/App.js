import React, { Component } from 'react';
import './App.css';
import Header from '../../components/Header/Header';
import Customers from '../Customers/Customers';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <Customers />
        </main>
      </div>
    );
  }
}

export default App;
