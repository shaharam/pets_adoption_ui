import React, {Component} from 'react';
import './Sign_up.css'
import axios from 'axios'

class log_in extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    postData = (event) =>{
        event.preventDefault();
        const email = this.state.email;
        const password = this.state.password;
        const data = {email, password};

        axios.post('http://localhost:8080/pas/v1/admin/pets/adoption/authentication/login', data)
            .then(res => {
                if(res.data === false){
                    console.log(res.data + ": logging failed");
                    alert("Email or password incorrect")
                }else {
                    localStorage.setItem('userId' ,email);
                    console.log("logged in successfully : " + localStorage.getItem('userId'));
                    document.getElementById("log_in_form").reset();   //Reset the form after submit
                    // eslint-disable-next-line no-restricted-globals
                    location.reload();
                    this.openHomePage();
                }
            })
    };


    openHomePage(){
        window.open('/', '_self');
    }


    changeData = (event) => {
        event.preventDefault();
        this.setState({
            [event.target.name]: event.target.value
        })

    };

    render() {

        return (
            <div className="container-fluid">
                <h1 id="log_in">Log in</h1>


                <form id="log_in_form" onSubmit={this.postData}>

                    <br/>
                    <input type="email" id="email" name="email" placeholder="Email"
                           onChange={this.changeData} required/>
                    <br/>
                    <br/>
                    <input type="password" id="password" name="password" placeholder="Password"
                           onChange={this.changeData} required/>
                    <br/>
                    <br/>
                    <button type="submit" id="submit">Log in</button>

                </form>


            </div>
        );
    }

}

export default log_in;