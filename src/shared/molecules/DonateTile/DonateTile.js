import React, { PureComponent } from "react";
import styles from "./DonateTile.module.scss";
import Heading from "../../atoms/Heading/Heading";

class DonateTile extends PureComponent {
  render() {
    return (
      <div className={styles.DonateTile}>
        <div>
          <Heading type="h4" style={{ color: this.props.textColour }}>{this.props.title}</Heading>
          <Heading type="h6" style={{ color: this.props.textColour }}>{this.props.subtitle}</Heading>
        </div>
        <img src={this.props.imgSrc} alt={this.props.alt || "Image not found"} />
      </div>
    );
  }
};

export default DonateTile;
