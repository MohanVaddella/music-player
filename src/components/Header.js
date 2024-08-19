import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Header.css';
import logo from '../logo.png';


const Header = () => {
  return (
    <header className="header">
      <div className="logo">
      <img src={logo} alt="Spotify Logo" className="logo-image" />
      </div>
      <nav className="nav">
        <ul>
          <li>
          <NavLink exact to="/" activeClassName="active-tab">
              For You
            </NavLink>
          </li>
          <li>
          <NavLink to="/top-tracks" activeClassName="active-tab">
              Top Tracks
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
