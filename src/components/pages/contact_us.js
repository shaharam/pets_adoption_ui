import React, {Component} from 'react';
import "./contact_us.css"

class Contact_us extends Component {
    render() {
        return (
            <div className="container-fluid">

                <h1>
                    Contact Us
                </h1>

                <h6>
                    Got a question? We'd love to hear from you.
                    <br/>
                    Send us a message and we'll respond as soon as possible.
                </h6>

                <form id="contact">
                    <label for="name">Name:</label>
                    <br/>
                    <input type="text" id="name" name="fname>" placeholder='Name' required/>
                    <br/>
                    <label for="email">Email:</label>
                    <br/>
                    <input type="email" id="email" name="email>" placeholder='Email' required/>
                    <br/>
                    <label for="subject">Subject:</label>
                    <br/>
                    <select id="subject" name="subject" form="contact" required>
                        <option value="" disabled selected>Select your subject</option>
                        <option value="Adoption">Adoption</option>
                        <option value="Hand_over">Hand over</option>
                        <option value="Technical_issue">Technical issue</option>
                        <option value="Careers">Careers</option>
                        <option value="Other">Other</option>
                    </select>
                    <br/>
                    <label for="message">Message:</label>
                    <br/>
                    <textarea id="message" name="message" placeholder='Message' rows="5" cols="50" maxlength="150" required>
                    </textarea>
                    <br/>
                    <br/>
                    <input type="submit" id="submit" value="Send Message"/>
                </form>

            </div>
        );
    }
}

export default Contact_us;