import React, { PureComponent } from "react";
import Heading from "../../atoms/Heading/Heading";
import styles from "./InTextList.module.scss";

class InTextList extends PureComponent {
  render() {
    return (
      <div className={styles.InTextList}>
        <Heading className={styles.Heading} type="h6">{this.props.title}</Heading>
        <hr />
        <ul>{this.props.children}</ul>
        <hr />
      </div>
    )
  }
}

export default InTextList;
