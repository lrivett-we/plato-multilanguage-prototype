import React, { PureComponent } from "react";
import styles from "./SocialIcon.module.scss";

class SocialIcon extends PureComponent {
  render() {
    return (
      <a href={this.props.link} className={`${styles.SocialIcon} ${this.props.className}`}>
        <img src={this.props.logo} alt="No logo"/>
      </a>
    )
  }
}

export default SocialIcon;
