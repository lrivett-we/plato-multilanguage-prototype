import React from "react";
import SbEditable from "storyblok-react";
import Quote from "../../objects/Quote/Quote";

const QuoteBlok = props => (
  <SbEditable content={props.blok}>
    <Quote
      quotation={props.blok.quotation}
      author={props.blok.author}
      textColour={props.blok.textColour}
      backgroundColor={props.blok.backgroundColour}
    />
  </SbEditable>
);

export default QuoteBlok;
