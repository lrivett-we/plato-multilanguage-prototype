import React, { PureComponent } from "react";
import BodyText from "../BodyText/BodyText";

class ListItem extends PureComponent {
  render() {
    return <li className={this.props.className}><BodyText type={this.props.fontSize}>{this.props.children}</BodyText></li>
  }
}

export default ListItem;
