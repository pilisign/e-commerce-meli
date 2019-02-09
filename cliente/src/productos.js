import React from "react";
import { Link } from "react-router-dom";
// import Header from './header';
import Shipping from './img/Icono_Envio.png';
// import { Button } from "react-bootstrap";

const Productos = props => {
  return (
    <section className="big-products-container">
     
      {/* <Header /> */}
      {props.productos.map((prod, index) => {
        return (
          <div key={`producto-${index}`}>
          
            <Link
              to={{
                pathname: "/productos/detalle/" + prod.id, // defino la ruta a la cual este link me va a redireccionar
                state: { producto: prod }, // por state le paso los objetos /data que necesito
                search: "?sort=name" // le puedo pasar un queryString
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
};

export default Productos;