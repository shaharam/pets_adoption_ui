import React, {Component} from 'react';
import './Sign_up.css'
import axios from 'axios'

class Sign_up extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            phoneNumber: '',
            password: '',
            validation_question:''
        }
    }

    postData = (event) => {
        event.preventDefault();
        const name = this.state.name;
        const email = this.state.email;
        const phoneNumber = this.state.phoneNumber;
        const password = this.state.password;
        const validationQuestion = this.state.validation_question;
        const data = {name, email, phoneNumber, password , validationQuestion};
        axios.post("http://localhost:8080/pas/v1/admin/pets/adoption/users/user", data)
            .then(res => {
                console.log(res.data);
                alert("Added successfully !");
                document.getElementById("sign_up_form").reset();   //Reset the form after submit
                window.open('/Log_in', '_self');

            }).catch(error => {
            console.log(error);
            alert(error.response.data.message)
        })
    };

    changeData = (event) => {
        event.preventDefault();
        this.setState({
            [event.target.name]: event.target.value
        })
    };

    render() {
        return (
            <div className="container-fluid">
                <h1 id="sign_up">Sign up</h1>
                <br/>
                <form id="sign_up_form" onSubmit={this.postData}>

                    <input type="text" id="name" name="name" placeholder="Name" onChange={this.changeData} required/>
                    <br/>
                    <br/>
                    <input type="email" id="email" name="email" placeholder="Email" onChange={this.changeData}
                           required/>
                    <br/>
                    <br/>
                    <input type="password" id="password" name="password" placeholder="Password" minLength="8"
                           onChange={this.changeData} required/>
                    <br/>
                    <br/>
                    <input type="text" id="phone" name="phoneNumber" placeholder="Phone" onChange={this.changeData}
                           required/>
                    <br/>
                    <br/>
                    <input type="text" id="validation_question" name="validation_question" placeholder="What's the last 4 digits of your id ?"  minLength="4" maxLength="4" onChange={this.changeData}
                           required/>
                    <br/>
                    <br/>
                    <button type="submit" id="submit">Sign up</button>

                </form>

            </div>
        );
    }
}

export default Sign_up;