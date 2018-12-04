import React from "react";

const Quote = (props) => {
  const style = {
    color: props.textColour,
    backgroundColor: props.backgroundColor,
    textAlign: "center",
  }
  return <div style={style}>

      <blockquote>{props.quotation}</blockquote>
      - {props.author}

  </div>;
}

export default Quote;