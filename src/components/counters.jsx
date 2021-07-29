import React, {Component} from 'react';
import Counter from './counter';

class Counters extends Component {

	

	render(){

		console.log('Counters rendered');

		const {onReset, onDelete, onIncrement, counters} = this.props;

		return (
			<div>
				<button className="btn btn-info m-2" onClick={onReset}>Reset</button>
{/*				<Counter />
				<Counter />
				<Counter />
				<Counter />*/}

				{/*These value and selected attributes are the props of Counter component. This is the way we pass argumnets to components.*/}
				{counters.map(counter => <Counter key={counter.id} onDelete={onDelete} onIncrement={onIncrement} counter={counter} />)}
			</div>
			);
	}

}
export default Counters;