import React, { PureComponent } from "react";
import styles from "./HeroImage.module.scss";
import Heading from "../../atoms/Heading/Heading";

class HeroImage extends PureComponent {
  render() {
    return (
      <div className={styles.HeroImage}>
        <div>
          <Heading type="h1" style={{ color: this.props.textColour }}>{this.props.title}</Heading>
          <Heading type="h5" style={{ color: this.props.textColour }}>{this.props.subtitle}</Heading>
        </div>
        <img src={this.props.imgSrc} alt={this.props.alt || "Image not found"} />
      </div>
    );
  }
};

export default HeroImage;
