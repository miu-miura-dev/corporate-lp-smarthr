import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <h3>HR Cloud</h3>
            <p>働くを、もっと自由に。</p>
          </div>

          <div className="footer-links">
            <a href="#">Message</a>
            <a href="#">Culture</a>
            <a href="#">Benefits</a>
            <a href="#">FAQ</a>
            <a href="#">Contact</a>
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