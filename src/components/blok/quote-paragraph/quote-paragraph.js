import React, { PureComponent } from "react";
import SbEditable from "storyblok-react";
import QuoteParagraph from "../../../shared/molecules/QuoteParagraph/QuoteParagraph";

class QuoteParagraphBlok extends PureComponent {
  render() {
    return (
      <SbEditable content={this.props.blok}>
        <QuoteParagraph 
          paragraph={this.props.blok.paragraphBody}
          bodyType={this.props.blok.fontSize}
          quote={this.props.blok.quoteBody}
          author={this.props.blok.quoteAuthor}
          description={this.props.blok.quoteDescription}
        />
      </SbEditable>
    )
  }
} 

export default QuoteParagraphBlok;
