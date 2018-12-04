import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import styles from "./Heading.module.scss";

class Heading extends PureComponent {
  render() {
    switch (this.props.type.toLowerCase()) {
      case "h1":
        return <h1 className={`${styles.Heading} ${this.props.className}`} style={this.props.style}>{this.props.children}</h1>;
      case "h2":
        return <h2 className={`${styles.Heading} ${this.props.className}`} style={this.props.style}>{this.props.children}</h2>;
      case "h3":
        return <h3 className={`${styles.Heading} ${this.props.className}`} style={this.props.style}>{this.props.children}</h3>;
      case "h4":
        return <h4 className={`${styles.Heading} ${this.props.className}`} style={this.props.style}>{this.props.children}</h4>;
      case "h5":
        return <h5 className={`${styles.Heading} ${this.props.className}`} style={this.props.style}>{this.props.children}</h5>;
      case "h6":
        return <h6 className={`${styles.Heading} ${this.props.className}`} style={this.props.style}>{this.props.children}</h6>;
      default:
        return null;
    }
  }
};

Heading.propTypes = {
  type: PropTypes.oneOf(["h1", "h2", "h3", "h4", "h5", "h6"]),
};

export default Heading;
