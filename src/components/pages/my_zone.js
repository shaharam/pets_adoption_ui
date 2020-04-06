import React, {Component} from 'react';
import data from "../../data/data";
import './adopt.css';
import axios from 'axios'


const pets_url = 'http://localhost:8080/pas/v1/admin/pets/adoption/pets/pet';


class My_zone extends Component {
    constructor(props) {
        super(props);
        this.state = data
    }

    importAll(r) {
        let images = {};
        // eslint-disable-next-line array-callback-return
        r.keys().map((item) => { images[item.replace('./', '')] = r(item); });
        return images;
    }

    renderTableData() {
        return this.state.map((pet) => {
            const images = this.importAll(require.context('../../img/animals', false, /\.(png|jpe?g|svg)$/));
            let {id,name, age, color, weight, description, category, picture_link,availability,removal} = pet; //destructuring

            function removePet() {
                axios.delete(pets_url,id);
            }

            function setAvailability() {
                if (availability)
                    availability = false; //axios.put
                else
                    availability = true;
            }

            if (availability){
                availability = <button type="button" id="removePet" onClick={setAvailability()}>Set pet as adopted</button>
            }
            else {
                availability = "Pet adopted"
            }

            if (age === 0) {
                age = ""
            }
            if (weight === 0.0) {
                weight = ""
            }

            removal = <button type="button" id = "removePet" onClick={removePet()}>Remove pet</button>

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