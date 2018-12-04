import React, { PureComponent } from "react";
import Heading from "../../atoms/Heading/Heading";
import SocialIcon from "../../atoms/SocialIcon/SocialIcon";
import styles from "./ShareBar.module.scss";

class ShareBar extends PureComponent {
  render() {
    return (
      <div className={styles.ShareBar}>
        <Heading className={styles.Heading} type="h6">SHARE</Heading>
        <SocialIcon link="https://www.facebook.com/WEmovement/" logo="https://img.icons8.com/metro/1600/facebook.png"/>
        <SocialIcon link="https://www.instagram.com/wemovement/?hl=en" logo="https://clipart.info/images/ccovers/1516920571instagram-png-instagram-icon-1600x1600.png"/>
        <SocialIcon link="https://twitter.com/wemovement?lang=en" logo="https://img.icons8.com/metro/1600/twitter.png"/>
      </div>
    )
  }
}

export default ShareBar;
