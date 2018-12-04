import React, { PureComponent } from "react";
import styles from "./ImageTile.module.scss";
import Heading from "../../atoms/Heading/Heading";

class ImageTile extends PureComponent {
  render() {
    return (
      <div className={styles.ImageTile}>
        <div>
          <Heading type="h4" style={{ color: this.props.textColour }}>{this.props.title}</Heading>
          <Heading type="h6" style={{ color: this.props.textColour }}>{this.props.subtitle}</Heading>
        </div>
        <img src={this.props.imgSrc} alt={this.props.alt || "Image not found"} />
      </div>
    );
  }
};

export default ImageTile;
