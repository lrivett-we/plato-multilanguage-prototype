import React from "react";
import SbEditable from "storyblok-react";
import Navbar from "../../../shared/organisms/Navbar/Navbar";

const navbarBlok = (props) => (
    <SbEditable content={props.blok}>
        <Navbar />
    </SbEditable>
)

navbarBlok.blokSettings = {
    display_name: "Navigation Bar",
    is_root: false,
    is_nestable: true,
    schema: {

    }
}

export default navbarBlok;
