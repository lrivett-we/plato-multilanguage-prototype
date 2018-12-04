import React, { PureComponent } from "react";
import SbEditable from "storyblok-react";
import BodyText from "../../../shared/atoms/BodyText/BodyText";

class BlogParagraph extends PureComponent {
  render() {
    return (
      <SbEditable content={this.props.blok}>
        <BodyText type={this.props.blok.fontSize}>{this.props.blok.text}</BodyText>
      </SbEditable>
    );
  }
}

export default BlogParagraph;
