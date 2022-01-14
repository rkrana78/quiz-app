import React from 'react';
import Account from '../Account/Account';
import logo from "../../assets/images/logo-bg.png";
import "./Nav.css";

const Nav = () => {
    return (
        <nav className='nav'>
            <ul>
                <li>
                    <a href='#' className='brand'>
                        <img src={logo} alt="Learn with Sumit Logo" />
                        <h3>Learn with Sumit</h3>
                    </a>
                </li>
            </ul>
            <Account />
        </nav>
    );
};

export default Nav;