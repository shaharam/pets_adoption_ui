import React, {Component} from 'react';
// import data from "../../data/data";
import './adopt.css';
import axios from 'axios'
import {render} from "react-dom";


const pets_url = 'http://localhost:8080/pas/v1/admin/pets/adoption/pets/pet/';
const get_pets = 'http://localhost:8080/pas/v1/admin/pets/adoption/users/user/pets/'+localStorage.getItem('userId');

class My_zone extends Component {
    constructor(props) {
        super(props);
         this.state = {
             // name: '',
             // age: '',
             // weight: ,
             // availability: '',
             // description: '',
             // category: '',
             // picture_link: '',
             pets: [],
             id: ''};

        this.getUserPets();
    }
    //
    // state = {
    //     name :'',
    //     age: null ,
    //     color:'',
    //     weight: null ,
    //     availability:true,
    //     description:'',
    //     category: '',
    //     picture_link:'',
    // };

    getUserPets() {
        axios.get(get_pets)
            .then(res => {
                const pets=res.data;
                this.setState({pets});
            })


    }

     removePet(id, event) {
        event.preventDefault();
        axios.delete(pets_url+id);
    }

     setAvailability(availability) {
        availability = !availability;
    }


    importAll(r) {
        let images = {};
        // eslint-disable-next-line array-callback-return
        r.keys().map((item) => { images[item.replace('./', '')] = r(item); });
        return images;
    }

    renderTableData() {
        return this.state.pets.map((pet) => {
            const images = this.importAll(require.context('../../img/animals', false, /\.(png|jpe?g|svg)$/));
            let {userId,id,name, age, color, weight, description, category, picture_link,availability,removal} = pet; //destructuring

            if (age === 0) {
                age = ""
            }
            if (weight === 0.0) {
                weight = ""
            }

            availability = <button type="button" id="removePet" onClick={this.setAvailability(availability)}>Set pet as adopted</button>
            removal = <button type="button" id = "removePet" onClick={(e) => this.removePet(id, e)}>Remove pet</button>

            return (
                <tr key={name}>
                    <td>{category}</td>
                    <td>{name}</td>
                    <td>{age}</td>
                    <td>{color}</td>
                    <td>{weight}</td>
                    <td>{description}</td>
                    <td><a href={images[picture_link]} target="_blank" rel="noopener noreferrer">See Me!</a></td>
                    <td>{availability}</td>
                    <td>{removal}</td>
                </tr>
            )
        })
    }

    render() {
        return (
            <div className="adopt">

                <table id="pets">
                    <tbody>
                    <tr>
                        <th width={150}>CATEGORY</th>
                        <th>NAME</th>
                        <th>AGE</th>
                        <th>COLOR</th>
                        <th width={100}>WEIGHT</th>
                        <th width={300}>DESCRIPTION</th>
                        <th width={120}>PICTURE</th>
                        <th width={180}>STATUS</th>
                        <th>REMOVAL</th>
                    </tr>
                    {this.renderTableData()}
                    </tbody>
                </table>
            </div>

        );
    }
}



export default My_zone;