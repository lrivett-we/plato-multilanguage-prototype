import React, { PureComponent } from "react"; 
import styles from "./CreditedImage.module.scss";
import BodyText from "../../atoms/BodyText/BodyText";

class CreditedImage extends PureComponent {
  render() {
    return (
      <div className={styles.CreditedImage}>
        <img src={this.props.imgSrc} alt={this.props.alt || "Image not found"} />
        { this.props.photoCredit ? <BodyText type="small">Photo Credit: {this.props.photoCredit}</BodyText> : null }
      </div>
    );
  }
}

export default CreditedImage;
