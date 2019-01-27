import React, { Component} from 'react';
import {Link} from 'react-router-dom';
import { NavLink } from "react-router-dom";

class Listado extends Component {
    constructor (props) {
        super(props);

        this.state = {
            libros: []
        }
    }
    // aca haces el fetch, podes usar axios tb. Apuntar al servidor de Node
    componentDidMount () {
        fetch('http://localhost:3000/api/books')
        .then(res => res.json())
        .then(data => {
            this.setState({
                libros: data
            })
        })
    }

  render() {
      const libros = this.state.libros.map(l => <li>{l.isbn} <Link to={`/detalle/${l.isbn}`}><button>ver detalle</button></Link></li>)

      return ( 
        <header className="search_result">
            <div>
                <h1>Listado de libros</h1>

                <Link to="/nuevo">Nuevo ISBN</Link>

                {/* <a href="/books/new">Buscar</a> */}
                <ul className="isbns">
                {libros}
                </ul>
            </div>
        </header>
      )
    }
}

export default Listado;