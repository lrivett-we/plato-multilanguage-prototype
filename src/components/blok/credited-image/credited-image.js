import React from "react";
import SbEditable from "storyblok-react";
import CreditedImage from "../../../shared/molecules/CreditedImage/CreditedImage";

const CreditedImageBlok = props => (
  <SbEditable content={props.blok}>
    <CreditedImage 
      imgSrc={props.blok.image}
      alt={props.blok.altText}
      photoCredit={props.blok.photoCredit}
    />
  </SbEditable>
);

export default CreditedImageBlok;
