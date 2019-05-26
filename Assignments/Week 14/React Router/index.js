import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <Router>
        {this.Layout()}
        <Route path="/" exact={true} component={Home} />
        <Route path="/about" component={AboutUs} />
        <Route path="/contact" component={ContactUs} />
      </Router>
    );
  }

  Layout() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="offset-md-4 col-md-4">
            <ul className="nav justify-content-center">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

class Home extends React.Component {
  render() {
    return this.getHomeData();
  }

  getHomeData() {
    return (
      <div className="row">
        <div className="col-md-4 offset-md-4">
          <h4>Attainu Home</h4>
          <hr />
          <p>This is homepage route.</p>
        </div>
      </div>
    );
  }
}

class ContactUs extends React.Component {
  render() {
    return this.getContactData();
  }

  getContactData() {
    return (
      <div className="row">
        <div className="col-md-4 offset-md-4">
          <h4>Contact Us</h4>
          <hr />
          <p>To hire our students contact us at students @attainu.com </p>
        </div>
      </div>
    );
  }
}

class AboutUs extends React.Component {
  render() {
    return this.getAboutData();
  }

  getAboutData() {
    return (
      <div className="ro<h1>{this.props.input}</h1>;w">
        <div className="col-md-4 offset-md-4">
          <h4>About Us</h4>
          <hr />
          <p>This is a about us page made with react</p>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
