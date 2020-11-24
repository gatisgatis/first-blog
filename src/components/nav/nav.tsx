import React, { FC } from "react";
import { Link } from "react-router-dom";
import { FaSearch } from 'react-icons/fa';
import "./nav.css";

const Nav: FC = () => {
  return (
    <nav className="nav margin-bottom--10">
      <Link className='nav__item' to="/about">About</Link>
      <Link className='nav__item' to="/">Home</Link>
      <Link className='nav__item' to="/galery">Galery</Link>
      <div className='nav__item'>
        <input type="text" placeholder="Search Here..."/>
        <FaSearch className='nav__search-icon'/>
      </div>
    </nav>
  );
};

export default Nav;
