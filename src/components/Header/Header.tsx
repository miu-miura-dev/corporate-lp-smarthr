import { useState } from "react";
import "./Header.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header">
      <div className="container header-inner">
        <div className="logo">SmartHR Recruit</div>

        <nav className={`nav ${isOpen ? "open" : ""}`}>
          <a href="#message">Message</a>
          <a href="#culture">Culture</a>
          <a href="#benefits">Benefits</a>
          <a href="#faq">FAQ</a>
          <a href="#contact">Contact</a>
        </nav>

        <button
          className="hamburger"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>
    </header>
  );
};

export default Header;