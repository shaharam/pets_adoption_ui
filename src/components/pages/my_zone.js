import React, {Component} from 'react';
// import data from "../../data/data";
import './adopt.css';
import axios from 'axios'
import {render} from "react-dom";


const pets_url = 'http://localhost:8080/pas/v1/admin/pets/adoption/pets/pet/';
const get_pets = 'http://localhost:8080/pas/v1/admin/pets/adoption/users/user/pets/'+localStorage.getItem('userId');
const update_pet = 'http://localhost:8080/pas/v1/admin/pets/adoption/pets/pet/';

class My_zone extends Component {
    constructor(props) {
        super(props);
         this.state = {
             name: '',
             age: '',
             weight: '',
             availability: '',
             description: '',
             category: '',
             picture_link: '',
             pets: [],
             pet: {}
             // id: ''
         };
        this.getUserPets();
    }

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
        // eslint-disable-next-line no-restricted-globals
        location.reload();
    }


     setAvailability(id, event) {
        event.preventDefault();
        axios.get(pets_url+id)
            .then(response => {
                const pet = response.data;
                this.setState({ pet });
                this.state.pet["availability"] = !(this.state.pet["availability"]);
                axios.put(update_pet+id, this.state.pet);
                // eslint-disable-next-line no-restricted-globals
                location.reload()
            });
    };

    importAll(r) {
        let images = {};
        // eslint-disable-next-line array-callback-return
        r.keys().map((item) => { images[item.replace('./', '')] = r(item); });
        return images;
    }

    renderTableData() {
        return this.state.pets.map((pet) => {
            const images = this.importAll(require.context('../../img/animals', false, /\.(png|jpe?g|svg)$/));
            let {id,name, age, color, weight, description, category, picture_link,availability} = pet; //destructuring

            if (age === 0) {
                age = ""
            }
            if (weight === 0.0) {
                weight = ""
            }

            if (availability === true) {
                availability = <button type="button" id="removePet" onClick={(e) => this.setAvailability(id, e)}>Set as unavailable</button>
            }
            else {
                availability = <button type="button" id="removePet" onClick={(e) => this.setAvailability(id, e)}>Set as available</button>
            }

            const removal = <button type="button" id = "removePet" onClick={(e) => this.removePet(id, e)}>Remove pet</button>

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