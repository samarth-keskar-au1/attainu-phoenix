import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends React.Component {
  render() {
    return <Router>{this.Layout()}</Router>;
  }

  Layout() {
    return (
      <React.Fragment>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <Link class="navbar-brand" to="/">
            Awesome Company
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon" />
          </button>

          <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
              <li class="nav-item">
                <Link class="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/about">
                  About-us
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/contact">
                  Contact-us
                </Link>
              </li>
            </ul>
            <form class="form-inline my-2 my-lg-0">
              <input
                class="form-control mr-sm-2"
                type="search"
                placeholder="Search"
              />
              <button
                class="btn btn-outline-success my-2 my-sm-0"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
        </nav>
        <div className="container-fluid">
          <Route path="/" exact={true} component={Home} />
          <Route path="/about" component={AboutUs} />
          <Route path="/contact" component={ContactUs} />
        </div>
      </React.Fragment>
    );
  }
}

class Home extends React.Component {
  state = {
    phones: [
      {
        title: "iphone X",
        imgUrl: "/iphone.jpg",
        display: "Display: 5.80-inch",
        processor: "Processor: 2.39GHz hexa-core",
        front: "Front Camera:7-megapixel",
        resolution: "Resolution: 1125x2436 pixels",
        ram: "RAM:3GB",
        os: "OS: iOS 11",
        storage: "Storage: 64GB",
        rear: "Rear Camera: 12-megapixel + 12-megapixel",
        battery: "Battery Capacity: 2716mAh"
      },
      {
        title: "OnePlus 6",
        imgUrl: "/op.jpg",
        display: "Display: 6.28-inch",
        processor: "Processor: 2.8GHz octa-core",
        front: "Front Camera: 16-megapixel",
        resolution: "Resolution: 1080x2280 pixels",
        ram: "RAM: 8GB",
        os: "OS: Android 8.1 Oreo",
        storage: "Storage: 128GB",
        rear: "Rear Camera: 16-megapixel + 20-megapixel",
        battery: "Battery Capacity: 3300mAh"
      },
      {
        title: "Pixel 2 XL",
        imgUrl: "/pixel.jpg",
        display: "Display: 6.00-inch",
        processor: "Processor: 1.9GHz octa-core",
        front: "Front Camera: 8-megapixel",
        resolution: "Resolution: 1440x2880 pixels",
        ram: "RAM: 4GB",
        os: "OS: Android 8.0.0",
        storage: "Storage: 64GB",
        rear: "Rear Camera: 12.2-megapixel",
        battery: "Battery Capacity: 3520mAh"
      },
      {
        title: "Samsung Galaxy S10",
        imgUrl: "/s10.jpg",
        display: "Display: 6.10-inch",
        processor: "Processor: 1.9GHz octa-core",
        front: "Front Camera: 10-megapixel",
        resolution: "Resolution: 1440 x 3040",
        ram: "RAM: 8GB",
        os: "OS: Android 9.0",
        storage: "Storage: 128GB",
        rear: "Rear Camera: 12-megapixel + 12-megapixel + 16-megapixel",
        battery: "Battery Capacity: 3400mAh"
      }
    ]
  };
  render() {
    return <div className="row">{this.getPhoneData()}</div>;
  }

  getPhoneData() {
    return this.state.phones.map(phone => (
      <div className="col-md-3">
        <img src={phone.imgUrl} className="img-fluid" />
        <br />
        <br />
        <h5 className="text-center">{phone.title}</h5>
        <hr />
        <ul>
          <li>{phone.display}</li>
          <li>{phone.processor}</li>
          <li>{phone.front}</li>
          <li>{phone.resolution}</li>
          <li>{phone.resolution}</li>
          <li>{phone.ram}</li>
          <li>{phone.os}</li>
          <li>{phone.storage}</li>
          <li>{phone.rear}</li>
          <li>{phone.battery}</li>
        </ul>
      </div>
    ));
  }
}

class ContactUs extends React.Component {
  render() {
    return <div className="row">{this.getContactData()}</div>;
  }

  getContactData() {
    return (
      <div className="row">
        <br />
        <br />
        <div className="offset-md-3 col-md-9">
          <h1 className="display-4">Contact Us</h1>
          <hr />
        </div>

        <div className="row">
          <div className="offset-md-3 col-md-9">
            <h5>Address:</h5>
            <p>
              207, Viman Nagar Rd, Clover Park, Viman Nagar, Pune, Maharashtra
              411014
            </p>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.2496506851785!2d73.91476881420475!3d18.562780272728304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c14140b9cdf3%3A0x213bd79590a5afb9!2sStarbucks!5e0!3m2!1sen!2sin!4v1551868764301"
              width="600"
              height="450"
              frameborder="0"
              style={{ border: 0 }}
              allowfullscreen
            />
          </div>
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
      <React.Fragment>
        <div className="row">
          <br />
          <br />
          <div className="offset-md-3 col-md-9">
            <h1 className="display-4">About Us</h1>
            <hr />
          </div>
        </div>

        <div className="row">
          <div className="offset-md-3 col-md-3">
            <h5>Samarth Keskar - CEO</h5>
            <hr />
            <p>
              If I won the award for laziness, I would send somebody to pick it
              up for me.
            </p>
          </div>

          <div className="offset-md-3 col-md-3">
            <img src="src/steve.png" alt="" className="img-fluid" />
          </div>
        </div>

        <div className="row">
          <div className="offset-md-3 col-md-3">
            <br />
            <br />
            <h5>John Doe - CTO</h5>
            <hr />
            <p>I’m just a simple guy swimming in a sea of sharks.</p>
          </div>

          <div className="offset-md-3 col-md-3">
            <br />
            <br />
            <img src="src/ninja.png" alt="" className="img-fluid" />
          </div>
        </div>

        <div className="row">
          <div className="offset-md-3 col-md-3">
            <br />
            <br />
            <h5>Jane Doe - COO</h5>
            <hr />
            <p>I like being glamorous because it’s not a crime.</p>
          </div>
          <div className="offset-md-3 col-md-3">
            <br />
            <br />
            <img src="src/mum.png" alt="" class="img-fluid" />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
