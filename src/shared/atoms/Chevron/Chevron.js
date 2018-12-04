import React, { PureComponent } from "react";
import styles from "./Chevron.module.scss";
import PropTypes from "prop-types";

class Chevron extends PureComponent {
  render() {
    let direction = null;
    switch(this.props.direction.toLowerCase()) {
      case "left":
        direction = "Left";
        break;
      case "right":
        direction = "Right";
        break;
      case "down":
        direction = "Down";
        break;
      default:
        direction = "Right";
    }
    return <span className={`${styles.Chevron} ${styles[`Chevron${direction}`]}`} style={{color: this.props.colour}}></span>
  }
}

Chevron.propTypes = {
  direction: PropTypes.oneOf(["left", "right", "up", "down"]),
};

export default Chevron;
