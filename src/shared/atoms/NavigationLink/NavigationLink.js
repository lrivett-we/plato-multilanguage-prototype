import React, { PureComponent } from "react";
import styles from "./NavigationLink.module.scss"

class NavigationLink extends PureComponent {
    render() {
        return <a className={`${styles.NavigationLink} ${this.props.className}`} href={this.props.link || "https://we.org"}>{this.props.children}</a>
    }
}

export default NavigationLink;
