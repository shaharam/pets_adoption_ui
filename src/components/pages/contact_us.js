import React, {Component} from 'react';
import "./contact_us.css";
import emailjs from 'emailjs-com';


class Contact_us extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            subject: '',
            message: ''

        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        (function(){
            emailjs.init("user_AJe7tcxvzzyKxE0mkRqcS");
        })()
    }

    handleChange(event) {
        event.preventDefault();
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) =>{
        event.preventDefault();
        const templateId = 'template_3NduILLk';
        this.sendFeedback(templateId, {message_html: this.state.message, from_name: this.state.email , subject: this.state.subject , reply_to:'petsAppdoption@gmail.com'})
    };

    sendFeedback (templateId, variables) {

       emailjs.send(
            'gmail', templateId,
            variables
        ).then(res => {
            console.log('Email successfully sent!')
            alert('The message sent successfully !')
            document.getElementById("contact").reset();
        })
            // Handle errors here however you like, or use a React error boundary
            .catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))
    }

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

                <form id="contact" onSubmit={this.handleSubmit}>
                    <br/>
                    <input type="text" id="name" name="name" placeholder='Name' onChange={this.handleChange} required/>
                    <br/>
                    <br/>
                    <input type="email" id="email" name="email" placeholder='Email' onChange={this.handleChange} required/>
                    <br/>
                    <br/>
                    <select id="subject" name="subject" form="contact" onChange={this.handleChange} required>
                        <option value="" disabled selected>Select your subject</option>
                        <option value="Adoption">Adoption</option>
                        <option value="Hand_over">Hand over</option>
                        <option value="Technical_issue">Technical issue</option>
                        <option value="Careers">Careers</option>
                        <option value="Other">Other</option>
                    </select>
                    <br/>
                    <br/>
                    <textarea id="message" name="message" placeholder='Message' rows="5" cols="50" maxLength="150"  onChange={this.handleChange} required>
                    </textarea>
                    <br/>
                    <br/>
                    <button type="submit" id="contact_us_submit" >Send Message!</button>
                </form>

            </div>
        );
    }


}

export default Contact_us;