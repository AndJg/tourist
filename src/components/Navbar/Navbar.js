import React from 'react';
import Logo from './Logo.png';
import { Link, NavLink } from 'react-router-dom';

import './Navbar.scss';
const Navbar = () => {
    return (
        <nav>
            <div className="nav">
                <div className="nav__logo">
                    <Link to="/">
                        {' '}
                        <img src={Logo} alt="Logo" />
                    </Link>
                </div>
                <ul className="nav__list">
                    <li className="nav__item">
                        <NavLink to="/home">home</NavLink>
                    </li>
                    <li className="nav__item">
                        <NavLink to="/about">about us</NavLink>
                    </li>
                    <li className="nav__item">
                        <NavLink to="/services">our services</NavLink>
                    </li>
                    <li className="nav__item">
                        <NavLink to="/tour">tour package</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
