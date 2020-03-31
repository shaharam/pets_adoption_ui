import React, {Component} from 'react';
import "./about.css";

class About extends Component {
    render() {
        return (
            <div className="container-fluid">

                <h1>
                    About content
                </h1>

                Appdoption is a free ,online searchable database of animals who need homes across the whole world.
                Any user who signed up can hand over their pet, provide basic information about it, and get contacted
                by any one who wishes to adopt it.
                <br></br><br></br>

                Our main goal is to facilitate the process of adoption by providing better communication and information about the pet.
                <br></br><br></br>
                You are welcome to contact us <a href="Contact_us" target="_blank" id="here">here</a>.

            </div>
        );
    }
}

export default About;