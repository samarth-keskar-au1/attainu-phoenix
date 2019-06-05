import React from "react";
import { connect } from "react-redux";
import { storeMapper } from "../store/store.js";

class SubBreedComponent extends React.Component {
  isAvailable() {
    if (this.props.subbreeds.length === 0) {
      return <h6>There are no subbreeds in this breed.</h6>;
    }
  }

  render() {
    if (this.props.isSubBreedLoading) {
      return <p>Loading SubBreed</p>;
    } else {
      return (
        <React.Fragment>
          {this.isAvailable()}
          {this.props.subbreeds.map(function(b) {
            return (
              <ul key={b} class="list-group">
                <li class="list-group-item">{b}</li>
              </ul>
            );
          })}
        </React.Fragment>
      );
    }
  }
}

let SubBreed = connect(storeMapper)(SubBreedComponent);

export { SubBreed };
