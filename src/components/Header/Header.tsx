import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">LOGO</div>
      <nav className="nav">
        <ul>
          <li>Message</li>
          <li>Culture</li>
          <li>Benefits</li>
          <li>FAQ</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;