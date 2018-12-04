import React from "react";
import SbEditable from "storyblok-react";
import Components from "../../components";
import InTextList from "../../../shared/molecules/InTextList/InTextList";

const InTextListBlok = (props) => {
  return (
    <SbEditable content={props.blok}>
      <InTextList title={props.blok.title}>
        {props.blok.listItems &&
          props.blok.listItems.map((blok) => {
            blok.fontSize = props.blok.fontSize;
            return (
              React.createElement(Components[blok.component], {
                key: blok._uid,
                blok: blok,
              })
            )
          })
        }
      </InTextList>
    </SbEditable>
  );
};

export default InTextListBlok;
