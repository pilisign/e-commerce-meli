import React, { Component } from 'react';
import Logo from './Ada_Iso_Blanco.png';
import SearchIcon from './Icono_Search.png';

class Search extends Component {
  handleSubmit (e) {
    e.preventDefault();
    this.props.history.push(`/user/${this.refs.userInput.value}`)
  }

  render() {
    return (
      <div className="search_box">
        <img src={Logo} className="search_logo" alt="Logo"/>
        <form onSubmit={(e) => this.handleSubmit(e)}>
            <input ref="userInput" className="search_input" type="text" />
            <button className="search_button"><img src={SearchIcon} className="search_icon" alt="Search"/></button>
        </form>
      </div>
    );
  }
}

export default Search;