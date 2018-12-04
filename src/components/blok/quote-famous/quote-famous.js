import React from "react";
import SbEditable from "storyblok-react";
import Quote from "../../objects/Quote/Quote";

const QuoteFamousBlok = props => {
  const quote = props.partial.quotes && props.partial.quotes[`storyblokentry-${props.blok.quote}`];
  if (!quote) {
    return (
      <SbEditable content={props.blok}>
        <div style={{ textAlign: "center" }}>NO QUOTE SELECTED</div>
      </SbEditable>
    );
  }

  return (
    <SbEditable content={props.blok}>
      <Quote
        quotation={quote.quotation}
        author={quote.author}
        textColour={quote.textColour}
        backgroundColor={quote.backgroundColour}
      />
    </SbEditable>
  );
};

export default QuoteFamousBlok;
