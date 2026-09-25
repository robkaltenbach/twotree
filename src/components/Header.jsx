import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="container nav-container">
                <a href="#" className="logo">
                    <img src="/twotree-wide.png" alt="Robert Kaltenbach — Two Tree Creative" className="header-logo" />
                </a>

                <nav>
                    <ul className="nav-links">
                        <li><a href="#services" className="nav-link">Services</a></li>
                        <li><a href="#projects" className="nav-link">Portfolio</a></li>
                        <li><a href="#contact" className="nav-link">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
