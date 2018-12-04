import React, { PureComponent } from "react";
import styles from "./BreadcrumbTrail.module.scss";
import Breadcrumb from "../../atoms/Breadcrumb/Breadcrumb";

class BreadcrumbTrail extends PureComponent {
  render() {
    return (
      <div className={styles.BreadcrumbTrail}>
        <Breadcrumb>Home</Breadcrumb>
        <Breadcrumb>Blog Posts</Breadcrumb>
        <Breadcrumb active>Hello World</Breadcrumb>
      </div>
    )
  }
}

export default BreadcrumbTrail;
