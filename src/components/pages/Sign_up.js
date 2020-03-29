import React, {Component} from 'react';
import './Sign_up.css'

class Sign_up extends Component{
    render() {
        return (
            <div className="container-fluid">
                <form>

                        <label for="fname">Full name</label>
                        <br></br>
                        <input type="text" id="fname" name="fname>"/>
                        <br></br><br></br>
                        <label htmlFor="email">Email</label>
                        <br></br>
                        <input type="text" id="email" name="email>"/>
                        <br></br><br></br>
                        <label htmlFor="password">Password</label>
                        <br></br>
                        <input type="password" id="password" name="password>"/>
                        <br></br><br></br>
                        <label htmlFor="phone">Phone</label>
                        <br></br>
                        <input type="text" id="phone" name="phone>"/>
                        <br></br>

                        <input type="submit" id="submit" value="Sign up"/>
                        <br></br>







                </form>



            </div>
        );
    }

}

export default Sign_up;