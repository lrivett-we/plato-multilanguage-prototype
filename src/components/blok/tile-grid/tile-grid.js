import React from "react";
import SbEditable from "storyblok-react";
import TileGrid from "../../../shared/organisms/TileGrid/TileGrid";

const TileGridBlok = (props) => {
  return (
    <SbEditable content={props.blok}>
      <TileGrid 
        topLeft={{
          title: props.blok.topLeftTitle,
          subtitle: props.blok.topLeftSubtitle,
          textColour: props.blok.topLeftTextColour,
          imgSrc: props.blok.topLeftImage,
          alt: props.blok.topLeftAltText,
        }}
        topRight={{
          title: props.blok.topRightTitle,
          subtitle: props.blok.topRightSubtitle,
          textColour: props.blok.topRightTextColour,
          imgSrc: props.blok.topRightImage,
          alt: props.blok.topRightAltText,
        }}
        middle={{
          title: props.blok.middleTitle,
          subtitle: props.blok.middleSubtitle,
          textColour: props.blok.middleTextColour,
          imgSrc: props.blok.middleImage,
          alt: props.blok.middleAltText,
        }}
        donate={{
          title: props.blok.donateTitle,
          subtitle: props.blok.donateSubtitle,
          textColour: props.blok.donateTextColour,
          imgSrc: props.blok.donateImage,
          alt: props.blok.donateAltText,
        }}
        bottomLeft={{
          title: props.blok.bottomLeftTitle,
          subtitle: props.blok.bottomLeftSubtitle,
          textColour: props.blok.bottomLeftTextColour,
          imgSrc: props.blok.bottomLeftImage,
          alt: props.blok.bottomLeftAltText,
        }}
        bottomCentre={{
          title: props.blok.bottomCentreTitle,
          subtitle: props.blok.bottomCentreSubtitle,
          textColour: props.blok.bottomCentreTextColour,
          imgSrc: props.blok.bottomCentreImage,
          alt: props.blok.bottomCentreAltText,
        }}
        bottomRight={{
          title: props.blok.bottomRightTitle,
          subtitle: props.blok.bottomRightSubtitle,
          textColour: props.blok.bottomRightTextColour,
          imgSrc: props.blok.bottomRightImage,
          alt: props.blok.bottomRightAltText,
        }}
      />
    </SbEditable>
  )
};


export default TileGridBlok;
