import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Home, Info, Calendar, Bell, Settings, Bot} from 'lucide-react';
import logo from '../../assets/icons/memories_icon.svg';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar__container">
        <Link to="/" className="navbar__logo">
          <img src={logo} alt="Memories Logo" className="navbar__logo-img" />
          <h2>Memories</h2>
        </Link>
        <button className="navbar__toggle" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        <div className={`navbar__items ${menuOpen ? 'open fade-in' : 'fade-out'}`} onClick={() => setMenuOpen(false)}>
          <Link to="/landing" className="navbar__link"><Home size={18} className="navbar__icon" /> Landing</Link>
          <Link to="/page" className="navbar__link"><Info size={18} className="navbar__icon" /> Info</Link>
          <Link to="/" className="navbar__link"><Calendar size={18} className="navbar__icon" /> Calendar</Link>
          <Link to="/chat" className="navbar__link"><Bot size={18} className="navbar__icon" /> Chat</Link>
          <Link to="/notifications" className="navbar__link"><Bell size={18} className="navbar__icon" /> Notifications</Link>
          <Link to="/config" className="navbar__link"><Settings size={18} className="navbar__icon" /> Config</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;