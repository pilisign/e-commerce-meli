import React from 'react';
import {NavLink} from "react-router-dom"

const Header = () => {
    return (
        <div className="breadcrumb">
            <NavLink exact to="/" activeClassName="is-active">Categoría </ NavLink>
            <NavLink strict to="/producto" activeClassName="is-active">Subcategoría</ NavLink>
            <NavLink sentisive to="/detalle" activeClassName="is-active">Producto</ NavLink>
        </div>
    );
};

export default Header;