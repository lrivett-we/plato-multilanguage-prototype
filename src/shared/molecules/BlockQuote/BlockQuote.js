import React, { PureComponent } from "react";
import styles from "./BlockQuote.module.scss";
import Heading from "../../atoms/Heading/Heading";
import QuotationMark from "../../atoms/QuotationMark/QuotationMark";

class BlockQuote extends PureComponent {
  render() {
    return (
      <div className={styles.BlockQuote} style={this.props.style || {}}>
        <div className={styles.Quotation}>
          <Heading type="h3">{this.props.quote}</Heading>
        </div>
        <div>
          <Heading type="h5">{this.props.author}</Heading>
          <Heading type="h6">{this.props.description}</Heading>
          <hr />
        </div>
        <div className={styles.QuotationMark}>
          <QuotationMark/>
        </div>
      </div>
    );
  }
}

export default BlockQuote;
