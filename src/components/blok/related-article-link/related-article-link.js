import React, { PureComponent } from "react";
import SbEditable from "storyblok-react";
import RelatedArticleLink from "../../../shared/organisms/RelatedArticleLink/RelatedArticleLink";

class RelatedArticleLinkBlok extends PureComponent {
  render() {
    return (
      <SbEditable content={this.props.blok}>
        <RelatedArticleLink
          title={this.props.blok.title}
          category={this.props.blok.category}
          imgSrc={this.props.blok.image}
          alt={this.props.blok.altText}
          articleURL={this.props.blok.articleURL.cached_url}
        />
      </SbEditable>
    )
  }
}

export default RelatedArticleLinkBlok;
