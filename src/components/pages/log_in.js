import React, {Component} from 'react';
import './Sign_up.css'

class log_in extends Component{
    render() {
        return (
            <div className="container-fluid">
                <h1 id="log_up">Log in</h1>


                <form>

                    <label for="fname">Email</label>
                    <br></br>
                    <input type="text" id="fname" name="fname>"/>
                    <br></br>
                    <label htmlFor="password">Password</label>
                    <br></br>
                    <input type="password" id="password" name="password>"/>
                    <br></br>
                    <input type="submit" id="submit" value="Log in"/>

                </form>




            </div>
        );
    }

}

export default log_in;