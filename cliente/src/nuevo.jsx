import React, { Component} from 'react';
import { NavLink } from "react-router-dom";

class Nuevo extends Component {
    constructor (props) {
        super(props);

        this.state = {
            newIsbn: ''
        }
    }

    handleOnchangeInput (e) {
        this.setState({
            newIsbn: e.target.value
        })
    }

    crear () {
        fetch('http://localhost:3000/api/books', {
            method: "POST",
            body: JSON.stringify({
                isbn: this.state.newIsbn
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        // salio todo ok y le muestro mensajito lindo al usuario
        .then(res => {
            // historial que guarda navegacion
            this.props.history.push('/listado')
        })
    }

  render() {
      return ( 
        <header className="w3-container w3-teal w3-center w3-margin-top">
            <div>
                <h1>Hola! Sumá tu libro</h1>
                <input value={this.state.newIsbn} onChange={this.handleOnchangeInput.bind(this)}/>
                <button onClick={() => this.crear()}>Guardar</button>
            </div>
            <nav>
                <ul>
                <li>
                    <NavLink exact to="/" activeClassName="is-selected">
                        Inicio
                    </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/nuevo" activeClassName="is-selected">
                            Productos
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/detalle" activeClassName="is-selected">
                            Contacto
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
      )
    }
}

export default Nuevo;