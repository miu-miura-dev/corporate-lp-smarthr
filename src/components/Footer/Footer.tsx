import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <h3>HR Cloud</h3>
            <p>働くを、もっと自由に。</p>
          </div>

          <div className="footer-links">
            <a href="#message">Message</a>
            <a href="#culture">Culture</a>
            <a href="#benefits">Benefits</a>
            <a href="#faq">FAQ</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="footer-social">
            <span>Twitter</span>
            <span>LinkedIn</span>
            <span>Instagram</span>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 HR Cloud Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;