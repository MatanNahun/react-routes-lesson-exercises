import React, { Component } from "react";
import "../styles/fentity.css";

class Fentity extends Component {
  render() {
    let fentitiesParam = this.props.match.params.fentities;
    let fentityParam = this.props.match.params.fentity;
    let fentity = this.props.state[fentitiesParam].find(
      (fentity) => fentity.name === fentityParam
    );
    console.log(fentitiesParam);
    console.log(fentityParam);
    console.log(fentity);
    return (
      <div id="creature-container">
        <h1>{fentity.name}</h1>
        <img src={fentity.imgUrl} alt="" />
        <div className="title">Power:</div>
        <div className="power text"> {fentity.power}</div>
        <div className="other text">{fentity.other}</div>
      </div>
    );
  }
}

export default Fentity;
