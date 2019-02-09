import React, { Component } from 'react';
import Header from './header';

class Detalle extends Component {

    constructor (props){
        super (props)
        this.state = {
            producto:{},
            categories: [],
            loading: true
        }
    }
   
    componentDidMount () {
        fetch('http://localhost:8080/api/items/' + this.props.match.params.id)
        .then(res => res.json())
        .then(data => {
            console.log('show data', data)
            
            this.setState({
                producto: data.item,
                categories: data.categories,
                loading: false
            })
            console.log('product', data.item)
            console.log ('categories', data.categories)
        })
    }
    
    render() {

        if (this.state.loading) {
            return <img alt="loading" src="https://media.giphy.com/media/rCAVWjzASyNlm/giphy.gif" />
        }

        return (
            <div>
               <Header categories={this.state.categories} />
                <div className="detail-container">
                <div className="detail-description">
                    <div className="detail-img"><img alt="picture" src={this.state.producto.pictures[0].url} /></div>
                    <div className="detail-items">
                        <span>{this.state.producto.condition} - </span>
                        <span>{this.state.producto.sold_quantity} vendidos</span>
                        <h4 className="detail-title">{this.state.producto.title}</h4>
                        <h2>${this.state.producto.price.amount}</h2>
                        <button className="detail-btn">Comprar</button>
                    </div> 
                </div>
                <div>
                <div className="detail-description-text">
                    <h2>Descripción del Producto</h2>
                    <p>{this.state.producto.description}</p>
                </div>
                </div>
                </div>
            </div>
        );
    }
}

export default Detalle;