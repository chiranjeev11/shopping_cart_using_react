import React, { Component } from 'react';
import Counters from './components/counters';
import NavBar from './components/navbar';
import './App.css';

class App extends Component {

	state = {
		counters: [
			{id:1, value:0},
			{id:2, value:0},
			{id:3, value:0},
			{id:4 , value:0}

		]
	}

	constructor(){
		super();
		console.log('App constructor');
	}


	// After dom has been rendered
	componentDidMount(){
		// after ajax call setState
		console.log('App Mounted')
	}

	handleReset = () => {
		const counters = this.state.counters.map(counter => {counter.value=0;
		return counter;});
		this.setState({counters});
	}

	handleDelete = (counterId) => {

		// Array of counters after removing a ounter with id counterId
		const counters = this.state.counters.filter(counter => counter.id !== counterId);

		// Updating the state
		this.setState({counters})
	}

	handleIncrement = (counter) => {
		const counters = this.state.counters;
		const index = counters.indexOf(counter);
		counters[index].value+=1;
		this.setState({counters});
	}


	render() {

			console.log('App rendered')
			return (
					<React.Fragment>
						<NavBar totalCounters={this.state.counters.filter(counter => counter.value>0).length} />
						<main className="container">
							<Counters onReset={this.handleReset} onDelete={this.handleDelete} onIncrement={this.handleIncrement} counters={this.state.counters} />
						</main>
					</React.Fragment>
			);
	}
}

export default App;
