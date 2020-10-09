import React, { Component } from 'react';

export default class Counter extends Component {
	

	//constructor() {
		//super();
		//this.handleIncrement = this.handleIncrement.bind(this);
	//}

	
	render() {			
		return (			
			<div>			
				<span style={{ fontSize: 12 }} className={this.selectClasses()}>{this.formatCount()}</span>
				<button onClick={() => this.props.onIncrement(this.props.counter)} 
				className="btn btn-secondary btn-sm">Increment
				</button>	
				<button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">Delete</button>			
			</div>
			

		);		
	}

	selectClasses(){
		let classes = "badge m-2 badge-";
		classes+= this.props.counter.value===0?"warning":"primary";
		return classes;
	}

	formatCount(){
		const {value} = this.props.counter;
		return value===0?'Zero':value;
	}
}


