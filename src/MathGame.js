import React, {Component} from 'react'

export default class MathGame extends Component{
	constructor(props){
		super(props);
		this.initiateState();
	}

	randomMath= ()=>{
		const value1 = Math.floor(Math.random() * 100);
		const value2 = Math.floor(Math.random() * 100);
		const value3 = Math.floor(Math.random() * 100);
		const proposedAnswer = Math.floor(Math.random() * 3) + value1 + value2 + value3;

		return [value1, value2, value3, proposedAnswer];
	};

	initiateState= ()=> {
		const values= this.randomMath();
		this.state= {
			value1 : values[0],
			value2 : values[1],
			value3 : values[2],
			proposedAnswer : values[3]
		};
	};

	newState= ()=> {
		const values= this.randomMath();
		this.setState({
			value1 : values[0],
			value2 : values[1],
			value3 : values[2],
			proposedAnswer : values[3]
		});
	};


	click= (answer) =>{
		const answerCorrectly= (this.state.value1 + this.state.value2 + this.state.value3 === this.state.proposedAnswer) === answer;
		this.props.handleScore(answerCorrectly);
		this.newState();   
  	};


	render(){
		return <div>
			<h2>Mental Math</h2>
			<div className="equation">
				<p className="text">{`${this.state.value1} + ${this.state.value2} + ${this.state.value3} = ${this.state.proposedAnswer}`}</p>
			</div>
			<button onClick={() => {this.click(true)}}>True</button>
			<button onClick={() => {this.click(false)}}>False</button>
		</div>;
	}
}