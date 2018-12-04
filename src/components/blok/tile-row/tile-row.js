import React from "react";
import SbEditable from "storyblok-react";
import TileRow from "../../../shared/organisms/TileRow/TileRow";

const TileGridBlok = (props) => {
  return (
    <SbEditable content={props.blok}>
      <TileRow 
        first={{
          title: props.blok.firstTitle,
          textColour: props.blok.firstTextColour,
          imgSrc: props.blok.firstImage,
          alt: props.blok.firstAltText,
        }}
        second={{
          title: props.blok.secondTitle,
          textColour: props.blok.secondTextColour,
          imgSrc: props.blok.secondImage,
          alt: props.blok.secondAltText,
        }}
        third={{
          title: props.blok.thirdTitle,
          textColour: props.blok.thirdTextColour,
          imgSrc: props.blok.thirdImage,
          alt: props.blok.thirdAltText,
        }}
      />
    </SbEditable>
  )
};


export default TileGridBlok;
