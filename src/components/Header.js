import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = ({ cartCount, toggleCart }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">PUBLIQE</Link>
      </div>

      <button className="hamburger" onClick={handleToggleMenu}>
        ☰
      </button>

      <nav className={`nav ${menuOpen ? 'open' : ''}`}>
        <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
        <Link to="/checkout" onClick={() => setMenuOpen(false)}>Checkout</Link>
        <button onClick={() => { toggleCart(); setMenuOpen(false); }}>
          Cart ({cartCount})
        </button>
      </nav>
    </header>
  );
};

export default Header;
