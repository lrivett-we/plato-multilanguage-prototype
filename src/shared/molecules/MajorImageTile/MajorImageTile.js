import React, { PureComponent } from "react";
import styles from "./MajorImageTile.module.scss";
import Heading from "../../atoms/Heading/Heading";

class MajorImageTile extends PureComponent { 
  render() {
    return (
      <div className={styles.MajorImageTile}>
        <div>
          <Heading type="h2" style={{color: this.props.textColour}}>{this.props.title}</Heading>
        </div>
        <img src={this.props.imgSrc} alt={this.props.alt || "Image not found"} />
      </div>
    );
  }
}

export default MajorImageTile
