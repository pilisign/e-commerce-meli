import React from 'react';
import {NavLink} from "react-router-dom"


// class Header extends Component {

//     render() {
//       const received = this.props.breadcrumb.received;
//       let categories = [];
  
//       if (received === true) {
//         categories = this.props.breadcrumb.data.categories.map((item, index) => (
//           <li key={index}>{item}</li>
//         ));
//       } else categories = '';
  
//       return (
//         <div className='breadcrumb-container'>
//           <div className='breadcrumb'>
//             <ul>{received ? categories : ''}</ul>
//           </div>
//         </div>
//       );
//     }
// }


const Header = (props) => {
    
    return (
        <div className="breadcrumb">
      
            <p>{props.categories} </p>
            {/* <NavLink exact to="/" activeClassName="is-active"> pepe Categoría </ NavLink>
            <NavLink strict to="/producto" activeClassName="is-active">Subcategoría</ NavLink>
            <NavLink sentisive to="/detalle" activeClassName="is-active">Producto</ NavLink> */}
        
        </div>
    );
};

export default Header;