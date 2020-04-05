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
            password: ''
        }
    }
    postData = (event) => {
        event.preventDefault();
        const name = this.state.name;
        const email = this.state.email;
        const phoneNumber = this.state.phoneNumber;
        const password = this.state.password;
        const data = {name, email, phoneNumber, password};
        axios.post("http://localhost:8080/pas/v1/admin/pets/adoption/users/user", data)
            .then(res => {
                console.log(res.data);
                alert("Added successfully !")
            }).catch(error => {
            console.log(error)
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
                <br></br>
                <form onSubmit={this.postData}>

                    {/*<label for="fname">Full name</label>*/}
                    {/*<br></br>*/}
                    <input type="text" id="name" name="name" placeholder="Name" onChange={this.changeData} required/>
                    <br></br>
                    {/*<label htmlFor="email">Email</label>*/}
                    <br></br>
                    <input type="text" id="email" name="email" placeholder="Email" onChange={this.changeData}
                           required/>
                    <br></br>
                    {/*<label htmlFor="password">Password</label>*/}
                    <br></br>
                    <input type="password" id="password" name="password" placeholder="Password" minLength="8"
                           onChange={this.changeData} required/>
                    <br></br>
                    {/*<label htmlFor="phone">Phone</label>*/}
                    <br></br>
                    <input type="text" id="phone" name="phoneNumber" placeholder="Phone" onChange={this.changeData}
                           required/>
                    <br></br><br></br>
                    <input type="submit" id="submit" value="Sign up"/>
                    <br></br><br></br>

                </form>

            </div>
        );
    }
}

export default Sign_up;