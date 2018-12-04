import React, { PureComponent } from "react";
import MajorImageTile from "../../molecules/MajorImageTile/MajorImageTile";
import "./TileRow.scss";

class TileRow extends PureComponent {
  render() {
    return (
      <div className="TileRow">
        <div className="TileRowTile">
          <MajorImageTile {...this.props.first} />
        </div>
        <div className="TileRowTile">
          <MajorImageTile {...this.props.second} />
        </div>
        <div className="TileRowTile">
          <MajorImageTile {...this.props.third} />
        </div>
      </div>
    )
  }
}

export default TileRow;
