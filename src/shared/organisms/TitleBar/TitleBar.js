import React, { PureComponent } from "react";
import styles from "./TitleBar.module.scss";
import AuthorInfo from "../../molecules/AuthorInfo/AuthorInfo";
import Heading from "../../atoms/Heading/Heading";

class TitleBar extends PureComponent {
  render() {
    return (
      <div className={styles.TitleBar}>
        <AuthorInfo profilePicture={this.props.profilePicture} publishedDate={this.props.publishedDate} authorName={this.props.authorName} avatarShape="circle"/>
        <div className={styles.TitleBarContent}>
          <Heading type="h1">{this.props.title}</Heading>
          <Heading type="h4">{this.props.summary}</Heading>
        </div>
      </div>
    )
  }
}

export default TitleBar;
