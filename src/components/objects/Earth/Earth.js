import React from "react";
import globeImage from "../../../../static/earth.png";

const earth = (props) => {
  const style = {
    padding: "20px",
    backgroundColor: props.colour || "black",
    textAlign: "center",
  }
  return (
    <div style={style}>
      <h3 style={{color: "white"}}>{props.caption}</h3>
      <img src={String(globeImage)} alt="Earth" />
    </div>
  )
};
export default earth;
