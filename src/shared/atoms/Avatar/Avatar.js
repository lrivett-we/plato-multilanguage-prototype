import React, { PureComponent } from "react";
import styles from "./Avatar.module.scss"
import PropTypes from "prop-types";

class Avatar extends PureComponent {
  render() {
    let avatarShape = {};
    if (this.props.shape === "circle") {
      avatarShape = {borderRadius: "30px"};
    }
    return <img className={`${styles.Avatar} ${this.props.className}`} shape={this.props.shape} style={avatarShape} src={this.props.profilePicture} alt="" />
  }
}

Avatar.propTypes = {
  type: PropTypes.oneOf(["circle", "square",]),
};

export default Avatar;
