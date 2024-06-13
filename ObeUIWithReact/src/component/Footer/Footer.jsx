import styles from "../Footer/Footer.module.css";
const Footer = () => {
  return (
    <>
      <div className={styles.footer}>
        <p>Copyright © 2023 OBE Accreditation. All rights reserved.</p>
        <p>Address: JIIT-128,Sector 128,Noida,Uttar Pradesh,India</p>
        <p>Email: contact@example.com</p>
      </div>
      <div className={styles.footer_container}>
        <section className={styles.footer_subscription}>
          <p className={styles.footer_subscription_heading}>
            Join our Gmail Channel for regular Updates.
          </p>
          <p className={styles.footer_subscription_text}>
            You can unsubscribe at any time.
          </p>
          <div className="input-areas">
            <form id="subscription-form">
              <input
                className="footer-input"
                name="email"
                type="email"
                placeholder="Your Email"
              />
              <button type="submit" className="btn btn--outline">
                Subscribe
              </button>
            </form>
          </div>
        </section>
        <div className="footer-links">
          <div className="footer-link-wrapper">
            <div className="footer-link-items">
              <h2>About Us</h2>
              <a href="/sign-up">How it works</a>
              <a href="/">Clients</a>
              <a href="/">F</a>
              <a href="/">Investors</a>
              <a href="/">Terms of Service</a>
            </div>
            <div className="footer-link-items">
              <h2>Contact Us</h2>
              <a href="/">Contact</a>
              <a href="/">Support</a>
              <a href="/">Destinations</a>
              <a href="/">Sponsorships</a>
            </div>
          </div>
          <div className="footer-link-wrapper">
            <div className="footer-link-items">
              <h2>Videos</h2>
              <a href="/">Submit Video</a>
              <a href="/">Ambassadors</a>
              <a href="/">Agency</a>
              <a href="/">Influencer</a>
            </div>
            <div className="footer-link-items">
              <h2>Social Media</h2>
              <a href="/">Instagram</a>
              <a href="/">Facebook</a>
              <a href="/">Youtube</a>
              <a href="/">Twitter</a>
            </div>
          </div>
        </div>
        <section className="social-media">
          <div className="social-media-wrap">
            <div className="footer-logo">
              <a href="/" className="social-logo">
                <i className="fab fa-typo3"></i>
              </a>
            </div>
            <small className="website-rights">OBE Accreditation © 2023</small>
            <div className="social-icons">
              <a
                className="social-icon-link facebook"
                href="/"
                target="_blank"
                aria-label="Facebook"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                className="social-icon-link instagram"
                href="/"
                target="_blank"
                aria-label="Instagram"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                className="social-icon-link youtube"
                href="/"
                target="_blank"
                aria-label="Youtube"
              >
                <i className="fab fa-youtube"></i>
              </a>
              <a
                className="social-icon-link twitter"
                href="/"
                target="_blank"
                aria-label="Twitter"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                className="social-icon-link twitter"
                href="/"
                target="_blank"
                aria-label="LinkedIn"
              >
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
export default Footer;
