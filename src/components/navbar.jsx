import React, { Component } from 'react';

//Stateless Functional Component

export default class NavBar extends Component {
  render() {
    return(
    	<nav className="navbar navbar-light bg-light">
    		<a className="navbar-brand" href="#">
    			Total Items <span className="badge badge-pill badge-secondary">{this.props.totalCounters}</span>
    		</a>
    	</nav>
    );
  }  
}