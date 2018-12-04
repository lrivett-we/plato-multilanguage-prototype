import React, { PureComponent } from "react";
import SbEditable from "storyblok-react";
import Heading from "../../../shared/atoms/Heading/Heading";

class BlogHeading extends PureComponent {
  render() {
    return (
      <SbEditable content={this.props.blok}>
        <Heading type={this.props.blok.headingType}>{this.props.blok.text}</Heading>
      </SbEditable>
    );
  }
}

export default BlogHeading;
