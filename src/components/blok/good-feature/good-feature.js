import React from "react";
import SbEditable from "storyblok-react";
import GoodFeature from "../../objects/GoodFeature/GoodFeature";

const GoodFeatureBlok = props => (
  <SbEditable content={props.blok}>
    <GoodFeature name={props.blok.name} />
  </SbEditable>
);

export default GoodFeatureBlok;
