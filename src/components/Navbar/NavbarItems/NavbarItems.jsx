import React from 'react'
import { Calendar } from 'lucide-react'
import './NavbarItems.css';
const NavbarItems = ({NavItemsRedirection,NavbarItemsText}) => {
  return (
    <a href={NavItemsRedirection}>
        <div className="NavbarItems">
            <span className='NavbarItems__icon'>
                <Calendar className="icon-calendar" size={20} />
            </span>
            <p className='NavbarItems__text'>{NavbarItemsText}</p>
        </div>
    </a>
  )
}

export default NavbarItems
