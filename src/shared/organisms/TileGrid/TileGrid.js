import React, { PureComponent } from "react";
import ImageTile from "../../molecules/ImageTile/ImageTile";
import DonateTile from "../../molecules/DonateTile/DonateTile";
import styles from "./TileGrid.module.scss";

class TileGrid extends PureComponent {
  render() {
    return (
      <div className={styles.TileGrid}>
        <div className={styles.TileGridRow}>
          <div className={styles.TileGridTopLeft}>
            <ImageTile {...this.props.topLeft} />
          </div>
          <div className={styles.TileGridTopRight}>
            <ImageTile {...this.props.topRight} />
          </div>
        </div>
        <div className={styles.TileGridRow}>
          <div className={styles.TileGridMiddle}>
            <ImageTile {...this.props.middle} />
          </div>
          <div className={styles.TileGridDonate}>
            <DonateTile {...this.props.donate} />
          </div>
        </div>
        <div className={styles.TileGridRow}>
          <div className={styles.TileGridBottom}>
            <ImageTile {...this.props.bottomLeft} />
          </div>
          <div className={styles.TileGridBottom}>
            <ImageTile {...this.props.bottomCentre} />
          </div>
          <div className={styles.TileGridBottom}>
            <ImageTile {...this.props.bottomRight} />
          </div>
        </div>
      </div>
    )
  }
}

export default TileGrid;
