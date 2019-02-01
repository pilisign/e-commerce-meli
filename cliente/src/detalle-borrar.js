import React from "react";
import Header from './header';

const Detalle = props => {

  console.log({ props });
  const { producto } = props.location.state;

  return (
    <div>
        <Header />
        <div className="detail-container">
        <div className="detail-img"><img alt="picture" src={producto.thumbnail} /></div>
        <div className="detail-items">
            <span>{producto.condition} - </span>
            <span>{producto.installments.quantity} vendidos</span>
            <h4 className="detail-title">{producto.title}</h4>
            <h2>${producto.price}</h2>
            <button className="detail-btn">Comprar</button>
        </div>
        </div>
        <div><p className="detail-description">{producto.description}</p></div>
    </div>
  );
};

export default Detalle;