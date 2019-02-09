import React, { Component } from 'react';
import Detalle from './detalle';
import Search from './search';
import Productos from "./productos";
import { BrowserRouter, Route } from "react-router-dom";
import './App.css';

const DETAIL = 
  "https://api.mercadolibre.com/items/";

const SEARCH_BY_NAME =
  "https://api.mercadolibre.com/sites/MLA/search?limit=4&q=";

const CATEGORIES = 
"https://api.mercadolibre.com/categories/";  

class App extends Component {
  constructor() {
    super();
    this.state = {
      productos: [],
      categories: []
    };
  }
  
  buscarProducto(nombre) {

    const url = `${SEARCH_BY_NAME}${nombre}`;
    fetch(url)
      .then(res => {
        return res.json();
      })
      .then(data => {
        console.log(data.results);
        this.setState({ productos: data.results });
      });
  }

  buscarDetalle(item) {
    const itemDetail = `${DETAIL}${item}`;
    fetch(itemDetail)
      .then(res => {
        return res.json();
      })
      .then(data => {
      console.log(data.results, 'detalle');
      this.setState({ detalle: data.results });
    });
  }
  
  render() {
   
    return (
      <div className="App">
        <BrowserRouter>
          <div>
          <Search buscarProducto={nombre => this.buscarProducto(nombre)} />
            <Route
              exact
              path="/productos"
              render={() => (
                <Productos
                  categories={this.state.categories.name}
                  productos={this.state.productos}
                  agregarAlCarrito={producto => this.agregarAlCarrito(producto)}
                />
              )}
            />
             <Route exact path="/productos/detalle/:id" component={Detalle} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
