import React, {Component} from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Route,
} from "react-router-dom";

// import components
import Header from "./components/headerComponent/header";
import Homepage from "./components/pages/homepage";
import Adopt from "./components/pages/adopt";
import Hand_over from "./components/pages/hand_over";
import My_zone from "./components/pages/my_zone";
import About from "./components/pages/about";
import Contact_us from "./components/pages/contact_us";
import Sign_up from "./components/pages/Sign_up";
import log_in from "./components/pages/log_in";
import forgot_password from "./components/pages/forgot_password";

class App extends Component {

    render() {

        return (

            <Router>
                <div className="App">
                    <Header />
                    <Route exact path='/' component={Homepage} />
                    <Route exact path='/Adopt' component={Adopt} />
                    <Route exact path='/Hand_over' component={Hand_over} />
                    <Route exact path='/My_Zone' component={My_zone} />
                    <Route exact path='/About' component={About} />
                    <Route exact path='/Contact_us' component={Contact_us} />
                    <Route exact path='/Sign_up' component={Sign_up} />
                    <Route exact path='/log_in' component={log_in}/>
                    <Route exact path='/forgot_password' component={forgot_password} />
                </div>
            </Router>
        );
    }
}

export default App;