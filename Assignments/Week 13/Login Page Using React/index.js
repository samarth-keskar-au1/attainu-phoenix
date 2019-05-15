import React from "react";
import ReactDOM from "react-dom";

class Email extends React.Component {
  render() {
    return (
      <div className="form-group">
        <label>Username</label>
        <input
          type="email"
          className="form-control"
          aria-describedby="emailHelp"
          placeholder="Enter username"
        />
      </div>
    );
  }
}

class Password extends React.Component {
  render() {
    return (
      <div className="form-group">
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          aria-describedby="emailHelp"
          placeholder="Enter Password"
        />
      </div>
    );
  }
}

class Button extends React.Component {
  render() {
    return (
      <button type="submit" className="btn btn-primary">
        Login
      </button>
    );
  }
}

class Form extends React.Component {
  render() {
    return (
      <form>
        <Email />
        <Password />
        <Button />
      </form>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="offset-md-4 col-md-4">
            <h1 className="display-3">Login</h1>
            <hr /> <br />
            <Form />
          </div>
        </div>
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("root"));
