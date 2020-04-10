import React, {Component, useCallback} from 'react';
import './header.css'
import logo from '../../img/logo.png'
import {
    BrowserRouter as Router,
    Link, Route
} from "react-router-dom";
import Homepage from "../pages/homepage";
import Adopt from "../pages/adopt";
import Hand_over from "../pages/hand_over";
import My_zone from "../pages/my_zone";
import About from "../pages/about";
import Contact_us from "../pages/contact_us";
import Sign_up from "../pages/Sign_up";
import log_in from "../pages/log_in";
import Footer from "../footerComponent/footer";

class Header extends Component {
    state = {
        isLoggedIn: false
    };

    removeLocalStorage(){
        localStorage.removeItem('userId');
        // eslint-disable-next-line no-restricted-globals
        location.reload();
        window.open('/', '_self');
    }

    isAuthenticated(){
        return(localStorage.getItem('userId') != null)
    }

    guidingToHandOver(){
        let guidePath = '/Hand_over';
        if(!this.isAuthenticated()){
            guidePath = '/Log_in' ;
        }
        return guidePath;
    }

    guidingToMyZone(){
        let guidePath = '/My_zone';
        if(!this.isAuthenticated()){
            guidePath = '/Log_in';
        }
        return guidePath;
    }



    render() {

        if(this.isAuthenticated()){
            this.state.isLoggedIn = true;
        }
        if(this.state.isLoggedIn) {
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
                                <Link onClick={this.removeLocalStorage} to={'/'} >Log out</Link>
                            </login>
                            &nbsp;&nbsp;&nbsp;
                            <signup>
                                <Link to='/Sign_up'>Join us</Link>
                            </signup>
                        </ul>
                    </nav>

                </header>

            );


        }
        else{
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
                                <Link to={this.guidingToHandOver()}>Hand over</Link>
                            </li>
                            <li>
                                <Link to={this.guidingToMyZone()}>My Zone</Link>
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
                                <Link to='/Sign_up'>Join us</Link>
                            </signup>
                        </ul>
                    </nav>

                </header>

            );

        }

    }

}

export default Header;
