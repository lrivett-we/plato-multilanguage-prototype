import React, { PureComponent } from "react";
import styles from "./QuoteParagraph.module.scss";
import BlockQuote from "../BlockQuote/BlockQuote";
import BodyText from "../../atoms/BodyText/BodyText";

class QuoteParagraph extends PureComponent {
  render() {
    return (
      <div className={styles.QuoteParagraph}>
        <div className={styles.BlockQuote}>
          <BlockQuote 
            quote={this.props.quote}  
            author={this.props.author}
            description={this.props.description}
          />
        </div>
        <div className={styles.Paragraph}>
          <BodyText type={this.props.bodyType}>
            {this.props.paragraph}
          </BodyText>
        </div>
      </div>
    )
  }
}

export default QuoteParagraph;
