import React from "react";
import { connect } from "react-redux";
import { storeMapper } from "./store.js";

class ImagesComponent extends React.Component {
  render() {
    if (this.props.isImagesLoading) {
      return <p>Loading Images</p>;
    } else {
      return this.props.images.map(function(b) {
        return <img src={b} class="img-thumbnail" alt="" />;
      });
    }
  }
}

let Images = connect(storeMapper)(ImagesComponent);

export { Images };
