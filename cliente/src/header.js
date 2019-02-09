import React from 'react';

const Header = (props) => {
    console.log('categories', props.categories)
    const breadcrumbs_detalle = props.categories.map((u,i) => {return <li>{u}</li>})
    
    return (
        <div className="breadcrumb">
            <ul>
                {breadcrumbs_detalle}
            </ul>
        </div>  
    );      
}

export default Header;