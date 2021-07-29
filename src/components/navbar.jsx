import React, { Component } from 'react';

//Stateless functional component - component class can be converted into function as it does not have state.

// Here this object in the argument is props
const NavBar = ({totalCounters}) => {

	console.log('Navbar rendered');
	
	return (



		<nav className="navbar navbar-light bg-light">
			<span className="navbar-brand mb-0 h1">
				Navbar
				<span className="badge bg-pill bg-secondary">
					{totalCounters}
				</span>
			</span>
		</nav>

		);

}

export default NavBar;
