import React, { Component} from 'react';
import { NavLink } from "react-router-dom";

class Detalle extends Component {

    constructor (props) {
        super(props)
        // aca voy a guardar el producto
        this.state = {
            book : {
                authors: []
            },
            loading: true
        }
    }

    componentDidMount (){
        fetch('http://localhost:3000/api/books/' + this.props.match.params.isbn)
        .then(res => res.json())
        .then(data => {
            this.setState({
                book : data,
                loading: false         
            })
        })    
    }

  render() {
      if (this.state.loading) {
          return <img alt="loading" src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif" />
      }
      return ( 
        <header className="w3-container w3-teal w3-center w3-margin-top">
            <div className="detail">
                <h1>{this.state.book.title}</h1>
                <img className="img-detail" alt="cover" src={this.state.book.cover} />
                <div>isbn: {this.state.book.isbn}</div>
                <div>subtitulo: {this.state.book.subtitle}</div>
                <div>description: {this.state.book.description}</div>
                <ul>
                    autores: {this.state.book.authors.map(author => <li>{author}</li>)}
                </ul>

              
            
            </div>
        </header>
      )
    }
}


export default Detalle;