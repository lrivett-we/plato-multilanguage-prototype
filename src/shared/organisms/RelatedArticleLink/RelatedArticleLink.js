import React, { PureComponent } from "react";
import styles from "./RelatedArticleLink.module.scss";
import Heading from "../../atoms/Heading/Heading";

class RelatedArticleLink extends PureComponent {
  render() {
    return (
      <div className={styles.RelatedArticleLink}>
        <div className={styles.RelatedArticleHeader}>
          <Heading type="h6">RELATED ARTICLE</Heading>
          <hr />
        </div>
        <div className={styles.RelatedArticleBlock}> 
          <div className={styles.RelatedArticleImage}>
            <img src={this.props.imgSrc} alt={this.props.alt} />
          </div>
          <div className={styles.RelatedArticleTitle}>
            <Heading type="h6">{this.props.category.toUpperCase()}</Heading>
            <a href={this.props.articleURL}><Heading type="h4">{this.props.title}</Heading></a>
          </div>
        </div>
      </div>
    );
  }
}

export default RelatedArticleLink;
