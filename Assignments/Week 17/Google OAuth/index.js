import React from "react";
import ReactDOM from "react-dom";
import { GoogleLogin } from "react-google-login";

class App extends React.Component {
  responseGoogle(response) {
    let user = {
      name: response.profileObj.name,
      token: response.accessToken
    };

    localStorage.setItem("user", JSON.stringify(user));
  }

  render() {
    return (
      <div>
        <GoogleLogin
          clientId="856149973585-2n8gqlu0u3utets032t8mtovo9kg2idp.apps.googleusercontent.com"
          buttonText="Login With Google"
          onSuccess={this.responseGoogle}
          onFailure={this.responseGoogle}
          cookiePolicy={"single_host_origin"}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
