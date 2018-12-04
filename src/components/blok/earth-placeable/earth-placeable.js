import React from "react";
import SbEditable from "storyblok-react";
import Earth from "../../objects/Earth/Earth";

const EarthPlaceableBlok = props => {
  const earth = props.partial.earth;
  if (!earth) return null;
  return (
    <SbEditable content={earth}>
      <Earth caption={earth.caption} colour={earth.colour} />
    </SbEditable>
  );
};

export default EarthPlaceableBlok;
