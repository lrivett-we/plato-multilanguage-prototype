import React from "react";
import SbEditable from "storyblok-react";
import Earth from "../../objects/Earth/Earth";

const EarthBlok = props => (
  <SbEditable content={props.blok}>
    <Earth caption={props.blok.caption} colour={props.blok.colour} />
  </SbEditable>
);

export default EarthBlok;
