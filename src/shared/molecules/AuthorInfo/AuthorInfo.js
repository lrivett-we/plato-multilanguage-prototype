import React, { PureComponent } from "react";
import Avatar from "../../atoms/Avatar/Avatar";
import BodyText from "../../atoms/BodyText/BodyText";
import styles from "./AuthorInfo.module.scss";

class AuthorInfo extends PureComponent {
  render() {
    return (
      <div className={styles.AuthorInfo}>
        <Avatar className={styles.Avatar} shape={this.props.avatarShape} profilePicture={this.props.profilePicture}/>
        <div className={styles.AuthorBreakLine} />
        <BodyText className={styles.LightBody} type="small">{this.props.publishedDate}</BodyText>
        <BodyText className={styles.LightBody} type="small">By: <span className={styles.AuthorName}>{this.props.authorName}</span></BodyText>
      </div>
    )
  }
}

export default AuthorInfo;
