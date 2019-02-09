import React from "react";
import { Link } from "react-router-dom";
import Shipping from './img/Icono_Envio.png';

const Productos = props => { 
  // const categories = props.categories.name
  // console.log ('categories', props.categories.name)
  return (
  
    <section className="big-products-container">  
      {/* <div>{prod.categories}</div> */}
      {props.productos.map((prod, index) => {

        return (
          <div key={`producto-${index}`}>
            <Link
              to={{
                pathname: "/productos/detalle/" + prod.id, // define node route
                state: { producto: prod }, // define elements to show in states
                search: "?sort=name" // define a queryString
              }}
            >
              
              <div className="products-container">
                <img
                  className="thumbnail-product" alt="thumbnail" style={{ display: "inline-block", verticalAlign: "middle"}}
                  src={`${prod.thumbnail}`}
                />
                <div className="product-description">
                  <p>{prod.shipping.free_shipping && <img src={Shipping} className="product-shipping" alt="shipping"/>}</p>
                  <h4 className="product-price">${prod.price}</h4>
                  <h5 style={{ display: "inline-block" }}>{prod.title}</h5>
                </div>
                <div>
                  <div className="product-descrition-text">
                    <p>{prod.address.state_name}</p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        );
      })}
    </section>
  );
}

export default Productos;