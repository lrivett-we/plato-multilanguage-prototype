import React, { PureComponent } from "react";

class Logo extends PureComponent {
    render() {
        return <img className={this.props.className} style={{height: this.props.height, width: this.props.width}} alt="error" src="https://i1.wp.com/accessnow.me/wp-content/uploads/2015/08/we-logo.png"></img>
    }
}

export default Logo;
