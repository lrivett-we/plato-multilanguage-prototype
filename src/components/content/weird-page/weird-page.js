import React from "react";
import Components from "../../components.js";
import { Toolbar } from "../../partial";

const WeirdPage = props => {
  return (
    <div>
      <Toolbar blok={props.partial.toolbar} />
      <div
        style={{
          width: "80%",
          margin: "0% 10% 0% 10%",
          border: "5px solid pink",
        }}
      >
        {props.blok.body &&
          props.blok.body.map(blok =>
            React.createElement(Components[blok.component], {
              key: blok._uid,
              blok: blok,
              partial: props.partial,
            })
          )}
      </div>
    </div>
  );
};

export default WeirdPage;
