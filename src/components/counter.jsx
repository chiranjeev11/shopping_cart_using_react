// There is a virtual dom which is react dom. When there is some change in the child component,
// all components are rendered and react compares origianl dom with the virtual dom and implement only the necessery changes.


import React, { Component } from 'react';



class Counter extends Component {

	// State is an object that contains data that this component needs.
	state = {
		value:this.props.counter.value,
		// tags: ['tag1', 'tag2', 'tag3']
		
	}


	// This is called when this component is updated
	componentDidUpdate(prevProps, prevState){
		console.log(prevProps,prevState)
	}


	// Called before component unmounted
	componentWillUnmount(){
		console.log('Component Unmount')
	}

	// When a function is called using obj.function() then this is the obj and when function is called like function() then this is undefined. That's why here we used arrow function which do not remember this, infact it inherita this on callig.
	// Or we can use bind function to bind the event listener using constructor
	// constructor(){
	// 	super();	// to call constructor of parent class.
	// 	this.handleIncrement = this.handleIncrement.bind(this);

	// }

	handleIncrement = ()=> {
		// this.state.count+=1		// This does not gona work as react does not know that there is any change in the state so thst it could change the dom.

		// When setState is called react finds which part is updated and then calls render function asynchronously.
		this.setState({value:this.state.value+1});
	}

	


	render() {



		return (

			// This uses React.createElement('h1')
			// <h1>Hello World</h1>

			// <div>
			// 	<h1>Hello World</h1>
			// 	<button>Increment</button>
			// </div>

			// For embedding in root div use React.Fragment instead of div.

			<div>
				<p className={this.getBadgeClass()}>{this.formatCount()}</p>			{/*You can write js in {}*/}
				<button onClick={() => this.props.onIncrement(this.props.counter)} className="btn btn-secondary m-2">Increment</button>
{/*				{this.state.tags.length===0 && <p>Pleas create a new tag</p>}
				<ul>{this.state.tags.map(tag => <li key={tag} >{tag}</li> )}</ul>*/}			{/*There must be key property in li element to uniquely identify that element in the list.*/}
				<button className="btn btn-danger m-2" onClick={()=> this.props.onDelete(this.props.counter.id)}>Delete</button>
			</div>
		);
	}

	getBadgeClass(){

		let classes = "badge m-2 bg-";

		classes += (this.props.counter.value===0) ? "warning" : "primary"; 

		return classes;

	}

	formatCount(){
		const { value } = this.props.counter;
		return value===0 ? "Zero" : value;
	}
}

export default Counter;