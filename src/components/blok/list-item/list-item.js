import React from "react";
import SbEditable from "storyblok-react";
import ListItem from "../../../shared/atoms/ListItem/ListItem";

const ListItemBlok = (props) => {
  return (
    <SbEditable content={props.blok}>
      <ListItem fontSize={props.blok.fontSize}>{props.blok.item}</ListItem>
    </SbEditable>
  )
}

export default ListItemBlok;
