import React, { PureComponent } from "react";
import styles from "./Breadcrumb.module.scss";
import variables from "../../_variables.scss";
import Chevron from "../Chevron/Chevron";

class Breadcrumb extends PureComponent {
  render() {
    let chevron = null;
    const activeStyle = {};
    if (!this.props.active) {
      chevron = <Chevron direction="right" colour={variables.baseGreyColour} />;
      activeStyle["textDecoration"] = "none";
      activeStyle["color"] = styles.primaryColour;
    }
    return <span className={`${styles.Breadcrumb} ${this.props.className}`}><a href="https://we.org" style={activeStyle}>{this.props.children}</a>{chevron}</span>
  }
}
  
export default Breadcrumb;
