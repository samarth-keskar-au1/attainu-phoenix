import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  state = { input: null };

  render() {
    return (
      <main className="Container m-4">
        <h1 className="display-4">React State Challange</h1>
        <hr />
        <Input updateInput={this.updateInput} />
        <hr />
        <Display input={this.state.input} />
      </main>
    );
  }

  updateInput = input => {
    this.setState({ input: input });
  };
}

class Input extends React.Component {
  render() {
    return <input onChange={this.handleInput} className="form-control" />;
  }

  handleInput = e => {
    this.props.updateInput(e.target.value);
  };
}

class Display extends React.Component {
  render() {
    return <h1>{this.props.input}</h1>;
  };
}

ReactDOM.render(<App />, document.getElementById("root"));
