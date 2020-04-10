import React, {Component} from 'react';
import './adopt.css'
import axios from "axios";
import log_in from "../pages/log_in";
import {Link} from "react-router-dom";
const pets_url = 'http://localhost:8080/pas/v1/admin/pets/adoption/pets/';

class Adopt extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pets: [],
            categories: [],
            value: 'ALL',  //Category
            owner: {}
        };

        //Import pet images
        this.images = this.importImgs(require.context('../../img/animals', false, /\.(png|jpe?g|svg)$/));

        //Binding for filter functions
        this.categoryChange = this.categoryChange.bind(this);
        this.categorySubmit = this.categorySubmit.bind(this);

        //Calling the functions here in order to display pets table and categories on the first entrance to the page
        this.getAllPets();
        this.getAllCategories();
    }

    isAuthenticated(){
        return(localStorage.getItem('userId') != null)
    }

    getAllPets() {
        axios.get(pets_url + 'get/all')
            .then(res => {
                const pets = res.data;
                this.setState({ pets });
            })
    }

    getPetByCategory() {
        axios.get(pets_url + 'category/' + this.state.value)    //Get the relevant category by state.value
            .then(res => {
                const pets = res.data;
                this.setState({ pets });
            })
    }

    getAllCategories() {
        axios.get(pets_url + 'categories')
            .then(res => {
                const categories = res.data;
                this.setState({ categories });
            });
    }

    importImgs(r) {
        let images = {};
        // eslint-disable-next-line array-callback-return
        r.keys().map((item) => { images[item.replace('./', '')] = r(item); });
        return images;
    }

    openLogeInPage(){
        window.open('/Log_in', '_self');
    }

    adoptMe(pet_id, event) {
        if(!this.isAuthenticated()){
               this.openLogeInPage();
        }

        event.preventDefault();
        axios.get(pets_url + 'pet/user/' + pet_id)
            .then(res => {
                this.setState({ owner: res.data });
                const ownerDetails = "<div id='ownerDiv'><p id='name'/><p id='phone'/><p id='mail'/></div>";

                const adoption = window.open("", "_blank",
                    "width=400,height=200,top=250,left=600,menubar=0,resizable=0,status=0,titlebar=0,toolbar=0" );

                adoption.document.open();
                adoption.document.write("<body style=\"font-family: Comic Sans MS\">");
                adoption.document.write("<h3 style=\'color: goldenrod'>Owner's contact details:</h3>");
                adoption.document.write("<hr>");
                adoption.document.write(ownerDetails);
                adoption.document.write("<hr>");
                adoption.document.getElementById("name").append("Owner Name: " + this.state.owner["name"]);
                adoption.document.getElementById("phone").append("Phone Number: " + this.state.owner["phoneNumber"]);
                adoption.document.getElementById("mail").append("Email: " + this.state.owner["email"]);
                adoption.document.close(); //prevent the infinite loading
            });
    }



    renderTableData() {
        return this.state.pets.map((pet) => {
            let {id, name, age, color, weight, description, category, picture_link} = pet; //destructuring
            if (age === 0) {    //Display empty cell instead of 0 when user didn't mentioned age
                age = ""
            }
            if (weight === 0.0) {   //Display empty cell instead of 0 when user didn't mentioned weight
                weight = ""
            }

            return (
                <tr>
                    <td>{category}</td>
                    <td>{name}</td>
                    <td>{age}</td>
                    <td>{color}</td>
                    <td>{weight}</td>
                    <td>{description}</td>
                    <td><a href={this.images[picture_link]} target="_blank" rel="noopener noreferrer">See Me!</a></td>
                    <td><button id="adopt" type="button" onClick={(e) =>
                        this.adoptMe(id, e)}>Adopt Me!</button></td>
                </tr>
            )
        })
    }

    renderCategories() {
        const categories = [];
        for (const value of this.state.categories) {
            categories.push(<option value={value}>{value}</option>)
        }
        return categories
    }

    categoryChange(event) {     //Value changed when different category chosen
        this.setState({value: event.target.value});
    }

    categorySubmit(event) {
        if (this.state.value === 'ALL')
            this.getAllPets();
        else
            this.getPetByCategory();
        event.preventDefault();
    }

    render() {
        return (
            <div className="adopt">
                <form id="category" onSubmit={this.categorySubmit}>
                    <select value={this.state.value} onChange={this.categoryChange}>
                        <option value="ALL">ALL</option>
                        {this.renderCategories()}
                    </select>
                    <button id="filter" type="submit">Filter by Pet</button>
                </form>
                <table id="pets">
                    <tbody>
                        <tr>
                            <th>CATEGORY</th>
                            <th>NAME</th>
                            <th>AGE</th>
                            <th>COLOR</th>
                            <th>WEIGHT</th>
                            <th>DESCRIPTION</th>
                            <th>PICTURE</th>
                            <th>ADOPT</th>
                        </tr>
                        {this.renderTableData()}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Adopt;