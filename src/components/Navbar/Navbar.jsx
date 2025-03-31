import React from 'react'
import logo from '../../assets/icons/memories_icon.webp';
import './Navbar.css';
import NavbarItems from './NavbarItems/NavbarItems';

const Navbar = () => {
  return (
    <>
    <div className="navbar">
        <div className="navbar__logo">
            <img className="navbar__logo img" src={logo} alt="Memories Logo" />
            <h2>Memories</h2>
            <div className="navbar__items">
              <NavbarItems 
                NavItemsRedirection="/"
                NavbarItemsText="Calendar"
              />
              <NavbarItems 
                NavItemsRedirection="/notifications"
                NavbarItemsText="Notifications"
              />
              <NavbarItems 
                NavItemsRedirection="/landing"
                NavbarItemsText="Config"
              />
            </div>
        </div>
        
        

    </div>

    </>
  )
}

export default Navbar
