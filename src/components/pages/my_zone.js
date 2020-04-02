import React, {Component} from 'react';
import data from "../../data/data";
import './adopt.css'



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
            let {name, age, color, weight, description, category, picture_link,availability} = pet; //destructuring

            function setAvailability() {
                availability = false;
            }

            if (age === 0) {
                age = ""
            }
            if (weight === 0.0) {
                weight = ""
            }

            if (availability === true){
                availability = <button type="button" id="removePet" onClick={setAvailability()}>Remove pet</button>
            }
            else {
                availability = "Pet adopted"
            }

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
                        <th width={160}>STATUS</th>
                    </tr>
                    {this.renderTableData()}
                    </tbody>
                </table>
            </div>


        );
    }
}



export default My_zone;