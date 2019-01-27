import React, { Component } from 'react';
import Header from './header';
import Listado from './listado';
import Nuevo from './nuevo';
import Detalle from './detalle';
import Search from './search';
// import { Route } from 'react-router-dom';
import { BrowserRouter, Route } from "react-router-dom";

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Search />
     
      {/* aca puedo poner algo fijooo */}
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/" component={Listado} />
            <Route exact path="/nuevo" component={Nuevo} />
            <Route exact path="/detalle/:isbn" component={Detalle} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
