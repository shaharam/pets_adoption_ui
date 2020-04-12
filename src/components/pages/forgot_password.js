import React, {Component} from 'react';
import './forgot_password.css'
import axios from 'axios'

class forgot_password extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user_name: '',
            validation_question: '',
            new_password: ''
        }
    }

    postData = (event) => {
       event.preventDefault();
        const userName = this.state.user_name;
        const validationQuestion = this.state. validation_question;
        const newPassword = this.state.new_password;
        const data = {newPassword ,validationQuestion};
        axios.put("http://localhost:8080/pas/v1/admin/pets/adoption/users/user/password/"+userName, data)
            .then(res => {
                console.log(res.data);
                alert("Password Updated successfully!")
                document.getElementById("forgot_password_form").reset();   //Reset the form after submit
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
                <h1 id="forgot_password">Forgot password</h1>
                <br/>
                <form id="forgot_password_form" onSubmit={this.postData}>

                    <input type="email" id="name" name="user_name" placeholder="User name" onChange={this.changeData} required/>
                    <br/>
                    <br/>
                    <input type="text" id="email" name="validation_question" placeholder="What's the last 4 digits of your id ?" onChange={this.changeData}
                           required/>
                    <br/>
                    <br/>
                    <input type="password" id="password" name="new_password" placeholder="New password" minLength="8"
                           onChange={this.changeData} required/>
                    <br/>

                    <br/>
                    <button type="submit" id="submit">Submit</button>

                </form>

            </div>
        );
    }
}

export default forgot_password;