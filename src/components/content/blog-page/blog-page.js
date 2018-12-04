import React, { PureComponent } from "react";
import Components from "../../components.js";
import Navbar from "../../../shared/organisms/Navbar/Navbar.js";
import Footer from "../../../shared/organisms/Footer/Footer.js";
import ShareBar from "../../../shared/molecules/ShareBar/ShareBar";
import BreadcrumbTrail from "../../../shared/molecules/BreadcrumbTrail/BreadcrumbTrail";
import TitleBar from "../../../shared/organisms/TitleBar/TitleBar.js";
import CreditedImage from "../../../shared/molecules/CreditedImage/CreditedImage.js";
import styles from "./blog-page.module.scss";

class BlogPage extends PureComponent {
  render() {
    return (
      <div>
        <Navbar />
        <div className={styles.BreadcrumbWrapper}>
          <BreadcrumbTrail />
        </div>
        <div className={styles.BlogPage}>
            <TitleBar
              profilePicture={this.props.blok.profilePicture}
              publishedDate={this.props.blok.publishedDate}
              title={this.props.blok.title}
              summary={this.props.blok.summary}
              authorName={this.props.blok.authorName}
            />
          <div className={styles.CreditedImageWrapper}>
            <CreditedImage
              imgSrc={this.props.blok.image}
              alt={this.props.blok.altText}
              photoCredit={this.props.blok.photoCredit}
            />
          </div>
          <div className={styles.BlogBody}>
            <div className={styles.ShareBarWrapper}>
              <ShareBar />
            </div>
            <div className={styles.BlogBodyWrapper}>
              {this.props.blok.blogBody &&
                this.props.blok.blogBody.map(blok =>
                  <div className={styles.BlogBodyComponent}>
                    {
                      React.createElement(Components[blok.component], {
                        key: blok._uid,
                        blok: blok,
                        partial: this.props.partial,
                        language: this.props.language,
                      })
                    }
                  </div>
                )}
            </div>
          </div>
        </div>
        <div className={styles.AfterBlogBody}>
          {this.props.blok.body &&
            this.props.blok.body.map(blok =>
              React.createElement(Components[blok.component], {
                key: blok._uid,
                blok: blok,
                partial: this.props.partial,
                language: this.props.language,
              })
            )}
        </div>
        <Footer />
      </div>
    );
  }
}

export default BlogPage;
