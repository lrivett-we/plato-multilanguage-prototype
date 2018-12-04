import React from "react";
import SbEditable from "storyblok-react";
import BadFeature from "../../objects/BadFeature/BadFeature";

const BadFeatureBlok = props => (
  <SbEditable content={props.blok}>
    <BadFeature name={props.blok.name} />
  </SbEditable>
);

export default BadFeatureBlok;
