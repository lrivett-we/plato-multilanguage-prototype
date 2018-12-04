import React, { PureComponent } from "react";
import Logo from "../../atoms/Logo/Logo";
import NavigationLink from "../../atoms/NavigationLink/NavigationLink";
import styles from "./Navbar.module.scss"

class Navbar extends PureComponent {
    render() {
        return (
            <div className={styles.Navbar}>
                <ul>
                    <li><Logo height="50px" width="50px" /></li>
                    <li><NavigationLink>About WE</NavigationLink></li>
                    <li><NavigationLink>WE School</NavigationLink></li>
                    <li><NavigationLink>WE Families</NavigationLink></li>
                    <li><NavigationLink>WE Companies</NavigationLink></li>
                    <li><NavigationLink>WE Day</NavigationLink></li>
                </ul>
            </div>
        );
    }
}

export default Navbar;
