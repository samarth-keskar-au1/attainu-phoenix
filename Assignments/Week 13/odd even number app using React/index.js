import React from "react";
import ReactDOM from "react-dom";

class EventHandle extends React.Component {

  state = {result: null};

  render() {
    return (
        <main className = "container m-5">
          <h3>Check if the the entered number is even or odd</h3>
          <p>
          <input onChange= {this.handleChange} type="text" className="form-control"/>
          </p>
          <p>
          <button onClick = {this.handleClick} className = "btn btn-success">Check</button>
          </p>

          <h3>{this.state.result}</h3>

        </main>
    );
  }
  

  handleChange = e => {
      this.setState({input : e.target.value});
  }

  handleClick = () => {
     return this.state.input % 2 === 0 ? this.setState({result:"This is a even number"}) : this.setState({result:"This is a odd number"});
  }

}


ReactDOM.render(<EventHandle />, document.getElementById("root"));
