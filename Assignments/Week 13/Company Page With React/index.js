import React from "react";
import ReactDOM from "react-dom";


class Content extends React.Component {

  state = {
    phones:[{
      title:"iphone X",
      imgUrl:"src/iphone.jpg",
      display:"Display: 5.80-inch",
      processor:"Processor: 2.39GHz hexa-core",
      front:"Front Camera:7-megapixel",
      resolution:"Resolution: 1125x2436 pixels",
      ram:"RAM:3GB",
      os:"OS: iOS 11",
      storage:"Storage: 64GB",
      rear:"Rear Camera: 12-megapixel + 12-megapixel",
      battery:"Battery Capacity: 2716mAh"
    },
    {
      title:"OnePlus 6",
      imgUrl:"src/op.jpg",
      display:"Display: 6.28-inch",
      processor:"Processor: 2.8GHz octa-core",
      front:"Front Camera: 16-megapixel",
      resolution:"Resolution: 1080x2280 pixels",
      ram:"RAM: 8GB",
      os:"OS: Android 8.1 Oreo",
      storage:"Storage: 128GB",
      rear:"Rear Camera: 16-megapixel + 20-megapixel",
      battery:"Battery Capacity: 3300mAh"
    },
    {
      title:"Pixel 2 XL",
      imgUrl:"src/pixel.jpg",
      display:"Display: 6.00-inch",
      processor:"Processor: 1.9GHz octa-core",
      front:"Front Camera: 8-megapixel",
      resolution:"Resolution: 1440x2880 pixels",
      ram:"RAM: 4GB",
      os:"OS: Android 8.0.0",
      storage:"Storage: 64GB",
      rear:"Rear Camera: 12.2-megapixel",
      battery:"Battery Capacity: 3520mAh"
    }]
  };

  render() {
    return(
        this.state.phones.map((phone) => {
          <div className="col-md-3">
            <img src={phone.imgUrl}  className="img-fluid"></img>
            <br/>
            <br/>
            <h5 className="text-center">{phone.title}</h5>
                <hr/>
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
        } )
    );
  }
}

class ContentRow extends React.Component{
  render() {
    return <div className = "row"> <Content/> </div>
  }
}


class Title extends React.Component {
  render() {
    return(
        <div className="row">
            <div className="offset-md-3 col-md-6">
                <h1 className="display-4">AwesomeCompany.com</h1>
                <hr/>
            </div>
        </div>
    );
  }
}


class Navbar extends React.Component {
  render() {
    return(
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="index.html">Awesome Company</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li className="nav-item">
                  <a className="nav-link" href="index.html">Home</a>
              </li>
              <li className="nav-item">
                  <a className="nav-link" href="about-us.html">About-us</a>
              </li>
              <li className="nav-item">
                  <a className="nav-link" href="contact-us.html">Contact-us</a>
              </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
              <input className="form-control mr-sm-2" type="search" placeholder="Search" />
              <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
                  Search
              </button>
          </form>
      </div>
  </nav>
    );
  }
}


class App extends React.Component {
  render() {
    return(
      <React.Fragment>
      <Navbar/>
      <div className="container-fluid"> 
      <Title/>
      <ContentRow/>
      </div>
      </React.Fragment>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
