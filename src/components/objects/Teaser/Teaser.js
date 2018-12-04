import React from 'react';
import Button from "../Button/Button";

const Teaser = (props) => (
  <div className="jumbotron jumbotron-fluid">
    <div className="container">
      <h1 className="display-4">{ props.headline }</h1>
      <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
      <Button submitText={props.submitText}></Button>
    </div>
  </div>
);

export default Teaser;
