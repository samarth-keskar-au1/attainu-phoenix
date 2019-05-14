import React from "react";
import ReactDOM from "react-dom";

class Button extends React.Component {
    render () {
        return <button>Click Here To Hack NASA With HTML.</button>
    }
}


ReactDOM.render(<Button/>, document.getElementById("root"))