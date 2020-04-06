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
                    <br/>
                    <input type="text" id="name" name="name" placeholder='Name' required/>
                    <br/>
                    <br/>
                    <input type="email" id="email" name="email" placeholder='Email' required/>
                    <br/>
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
                    <br/>
                    <textarea id="message" name="message" placeholder='Message' rows="5" cols="50" maxLength="150" required>
                    </textarea>
                    <br/>
                    <br/>
                    <button type="submit" id="contact_us_submit">Send Message!</button>
                </form>

            </div>
        );
    }
}

export default Contact_us;