import React from "react";
import Components from "../../components";
import Navbar from "../../../shared/organisms/Navbar/Navbar";
import Footer from "../../../shared/organisms/Footer/Footer";

const DemoPage = props => {
  return (
    <div>
      <Navbar />
      {props.blok.body &&
        props.blok.body.map(blok =>
          React.createElement(Components[blok.component], {
            key: blok._uid,
            blok: blok,
            partial: props.partial,
            language: props.language,
          })
        )}
      <Footer />
    </div>
  );
};

export default DemoPage;
