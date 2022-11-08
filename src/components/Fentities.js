import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/fentity-directory.css";

class Fentities extends Component {
  render() {
    console.log(this.props.match.params.fentities);
    let fentitiesCategory = this.props.match.params.fentities;
    return <div>{this.props.match.params.fentities}</div>;
    //  (
    //     <div>
    //         <h1 id="fentities-title">{/*Get from `match`*/}</h1>
    //         <div id="fentities-container">
    //             {fentities.map(f => {
    //                 return (
    //                     <div className="mini">
    //                         <img className="directory-img" src={f.imgUrl} alt="" />
    //                         <span>{f.name}</span>
    //                     </div>
    //                 )
    //             })}
    //         </div>
    //     </div>)
  }
}

export default Fentities;
