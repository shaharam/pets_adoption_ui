import React, {Component} from 'react';
import './header.css'
import logo from '../../img/logo.png'
import {
    Link
} from "react-router-dom";

class Header extends Component {
    render() {
        return (
            <header className='header'>
                <div className='logo'>
                    <Link to='/'>
                        <img src={logo} alt="logo"/>
                    </Link>
                </div>

                <nav className="nav-menu">
                    <ul>
                        <li className="first">
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                            <Link to='/Adopt'>Adopt</Link>
                        </li>
                        <li>
                            <Link to='/Hand_over'>Hand over</Link>
                        </li>
                        <li>
                            <Link to='/My_zone'>My Zone</Link>
                        </li>
                        <li>
                            <Link to='/About'>About</Link>
                        </li>
                        <li className="last">
                            <Link to='/Contact_us'>Contact us</Link>
                        </li>
                        <login>
                                <Link to='/Log_in'>Log in</Link>
                        </login>
                        &nbsp;&nbsp;&nbsp;
                        <signup>
                            <Link to='/Sign_up'>Sign up</Link>
                        </signup>
                    </ul>
                </nav>
            </header>
        );
    }
}

export default Header;
