import React, { Component } from 'react';
import Logo from './img/Ada_Iso_Blanco.png';
import SearchIcon from './img/Icono_Search.png';
import { Link } from "react-router-dom";

class Search extends Component {
    constructor(){
        super()
        this.state={
            inputValue: ""
        }
    }

    handleInputChange(event){
        // const value = event.target.value
        const {value} = event.target
        this.setState({
            inputValue: value
        })
    }
    handleKeyPress(e){
        if(e.which === 13) {
            const {inputValue} = this.state
            this.props.buscarProducto(inputValue)
        }
    }
   
    render() {
        const {inputValue} = this.state
        return (
            <div>
            <Link
              to={{
                pathname: "/productos", // defino la ruta a la cual este link me va a redireccionar
                // search: "?sort=name" // le puedo pasar un queryString
              }}
              >
            <div className="search_box">
                <img src={Logo} className="search_logo" alt="Search"/>
                <input onKeyPress={e => this.handleKeyPress(e)} onChange={e => this.handleInputChange(e)} value={this.state.inputValue} placeholder="nunca dejes de buscar..." className="search_input" type="text"/>
                <button onClick={() => this.props.buscarProducto(inputValue)} className="search_button"><img src={SearchIcon} className="search_icon" alt="Search"/></button>
            </div>
            </Link>
            </div>
        );
    }

    // Search.propTypes = {
    //     buscarProducto: PropTypes.func.isRequired,
    // }
}

export default Search