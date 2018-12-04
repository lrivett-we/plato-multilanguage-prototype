import React from "react";
import SbEditable from "storyblok-react";
import HeroImage from "../../../shared/organisms/HeroImage/HeroImage"

const heroImageBlok = (props) => (
  <SbEditable content={props.blok}>
    <HeroImage 
      title={props.blok.title}
      subtitle={props.blok.subtitle}
      textColour={props.blok.textColour}
      imgSrc={props.blok.image}
      alt={props.blok.altText}
    />
  </SbEditable>
)

export default heroImageBlok;
