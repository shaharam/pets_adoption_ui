import React, {Component} from 'react';
import './homepage.css'

class Homepage extends Component {
    render() {
        return (
            <div className="container-fluid">

                <h1>
                    ADOPT US.
                    <br/>
                    WE NEED YOUR HELP.
                </h1>
                <br/>
                <form>
                    <button type="submit" formAction="/Adopt">ADOPT A PET</button>
                    <button type="submit" formAction="/Hand_over">HAND OVER A PET</button>
                </form>
            </div>
        );
    }
}

export default Homepage;