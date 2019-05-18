import React from "react";
import ReactDOM from "react-dom";

class Calculator extends React.Component {

  state = { result: null};

  render() {
    return (
        <main className = "container m-5">
          <p>
          <input onChange= {this.getNumOne} type="text" placeholder= "Enter Number 1" className="form-control"/>
          </p>
          <p>
          <input onChange= {this.getNumTwo} type="text" placeholder= "Enter Number 2" className="form-control"/>
          </p>
          <p>
          <button onClick = {this.handleAdd} className = "btn btn-info m-3">Add</button>
          <button onClick = {this.handleSub} className = "btn btn-info m-3">Sub</button>
          <button onClick = {this.handleMul} className = "btn btn-info m-3">Mul</button>
          <button onClick = {this.handleDiv} className = "btn btn-info m-3">Div</button>
          </p>

          <h3>{this.state.result}</h3>

        </main>
    );
  }
  

  getNumOne = e => {
       this.setState({num1 : parseInt(e.target.value)});
  }

  getNumTwo = e => {
    this.setState({num2 : parseInt(e.target.value)});
}


  handleAdd = () => {
    let {num1} = this.state;
    let {num2} = this.state;
    this.setState({result:`The addition of ${num1} and ${num2} is ${num1+num2}.`})
  }

  handleSub = () => {
    let {num1} = this.state;
    let {num2} = this.state;
    this.setState({result:`The substraction of ${num1} and ${num2} is ${num1-num2}.`})
  }

  handleMul = () => {
    let {num1} = this.state;
    let {num2} = this.state;
    this.setState({result:`The multiplication of ${num1} and ${num2} is ${num1*num2}.`})
  }

  handleDiv = () => {
    let {num1} = this.state;
    let {num2} = this.state;
    this.setState({result:`The dividation of ${num1} and ${num2} is ${num1/num2}.`})
  }

}


ReactDOM.render(<Calculator />, document.getElementById("root"));
