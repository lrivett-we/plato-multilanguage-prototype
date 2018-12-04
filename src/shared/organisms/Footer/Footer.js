import React, { PureComponent } from "react";
import styles from "./Footer.module.scss";
import NavigationLink from "../../atoms/NavigationLink/NavigationLink";
import BodyText from "../../atoms/BodyText/BodyText";

class Footer extends PureComponent {
  render() {
    return (
      <div className={styles.FooterContainer}>
        <div className={styles.FooterPadding}></div>
        <div className={styles.Footer}>
          <div className={styles.NavigationLinks}>
            <div className={styles.NavigationBlock}>
              <BodyText type="main">LIVE WE</BodyText>
              <NavigationLink>WE School</NavigationLink>
              <NavigationLink>WE Families</NavigationLink>
              <NavigationLink>WE Companies</NavigationLink>
            </div>
            <div className={styles.NavigationBlock}>
              <BodyText type="main">WE DAY</BodyText>
              <NavigationLink>WE Day</NavigationLink>
              <NavigationLink>WE Day X</NavigationLink>
              <NavigationLink>WE Day Family</NavigationLink>
            </div>
            <div className={styles.NavigationBlock}>
              <BodyText type="main">ME to WE</BodyText>
              <NavigationLink>Travel</NavigationLink>
              <NavigationLink>Shop</NavigationLink>
            </div>
            <div className={styles.NavigationBlock}>
              <BodyText type="main">DONATE</BodyText>
              <NavigationLink>Ways to Give</NavigationLink>
              <NavigationLink>Fundraise</NavigationLink>
              <NavigationLink>Legacy Giving</NavigationLink>
              <NavigationLink>Transformational Gifts</NavigationLink>
            </div>
          </div>
          <div className={styles.Search}>
            Search
            <input placeholder="Enter Search Query"></input>
          </div>
          <div className={styles.Break}>
            <div className={styles.AboveBreak}>
              <BodyText type="small" className={styles.SocialLinks}>Facebook, Instagram, Twitter, Vimeo</BodyText>
              <BodyText type="small" className={styles.Under13Link}><NavigationLink>Notice to Children Under 13</NavigationLink></BodyText>
            </div>
            <hr />
            <div className={styles.BelowBreak}>
              <BodyText type="small" className={styles.CopyrightNotice}>© WE Charity, 2018. All Rights Reserved.</BodyText>
              <BodyText type="small" className={styles.LanguageSelect}>Canada (English) | French</BodyText>
            </div>
          </div>
          <div className={styles.SiteLinks}>
            <NavigationLink className={styles.SiteNavigation}>Privacy Policy</NavigationLink>
            <NavigationLink className={styles.SiteNavigation}>Use of Cookies</NavigationLink>
            <NavigationLink className={styles.SiteNavigation}>Terms of Use</NavigationLink>
            <NavigationLink className={styles.SiteNavigation}>Sales and Refunds</NavigationLink>
          </div>
        </div>
      </div>
    )
  }
}

export default Footer;
