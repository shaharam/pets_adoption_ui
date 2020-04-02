import React, {Component} from 'react';
import "./about.css";

class About extends Component {
    render() {
        return (
            <div className="container-fluid">

                <h1>
                    About AppDoption
                </h1>

                AppDoption is a free, online searchable database of animals who need home across the whole world.
                Any user who signed up can  provide basic information about it, and get contacted
                by any one who wishes to adopt it. <br></br>
                If you are not signed up to AppDoption, you can take a look on our pets and give them what they all want - a home.
                <br></br><br></br>

                Our main goal is to facilitate the process of adoption by providing better communication and information about the pet.
                <br></br><br></br>
                You are welcome to contact us <a href="Contact_us" target="_blank" id="here">here</a>.

            </div>
        );
    }
}

export default About;