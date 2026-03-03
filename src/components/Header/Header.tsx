import { useState } from "react";
import "./Header.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">SmartHR Recruit</div>

        <nav className={`nav ${isOpen ? "open" : ""}`}>
          <ul>
            <li>Message</li>
            <li>Culture</li>
            <li>Benefits</li>
            <li>FAQ</li>
            <li>Contact</li>
          </ul>
        </nav>

        <div
          className={`hamburger ${isOpen ? "active" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span />
          <span />
          <span />
        </div>
      </div>
    </header>
  );
};

export default Header;