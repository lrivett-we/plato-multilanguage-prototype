import React, { PureComponent } from "react";
import styles from "./BodyText.module.scss";
import PropTypes from "prop-types";

const typeClassNames = {
  large: "BodyLarge",
  main: "BodyMain",
  small: "BodySmall",
};

class BodyText extends PureComponent {
  render() {
    return (
      <p className={`${styles.BodyText} ${styles[typeClassNames[this.props.type]]} ${this.props.className}`}>
        {this.props.children}
      </p>
    )
  }
}

BodyText.propTypes = {
  type: PropTypes.oneOf(["large", "main", "small"]),
};

export default BodyText;
