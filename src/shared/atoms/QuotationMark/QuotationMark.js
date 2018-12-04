import React, { PureComponent } from "react";
import styles from "./QuotationMark.module.scss";

class QuotationMark extends PureComponent {
  render() {
    return <div className={styles.QuotationMark}>{"“"}</div>;
  }
}

export default QuotationMark;
