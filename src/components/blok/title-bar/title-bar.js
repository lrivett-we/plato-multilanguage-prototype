import React from "react";
import SbEditable from "storyblok-react";
import TitleBar from "../../../shared/organisms/TitleBar/TitleBar";

const TitleBarBlok = (props) => {
  return (
    <SbEditable content={props.blok}>
      <TitleBar 
        profilePicture={props.blok.profilePicture}
        publishedDate={props.blok.publishedDate}
        title={props.blok.title}
        summary={props.blok.summary}
        authorName={props.blok.authorName}
        avatarShape={props.blok.avatarShape}
      />
    </SbEditable>
  )
}

export default TitleBarBlok;
