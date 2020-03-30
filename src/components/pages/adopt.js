import React, {Component} from 'react';
import './adopt.css'
import data from '../../data/data'

class Adopt extends Component {
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
            let {name, age, color, weight, description, category, picture_link} = pet; //destructuring
            if (age === 0) {
                age = ""
            }
            if (weight === 0.0) {
                weight = ""
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
                    <td><a href="FIX URL">Adopt Me</a></td>
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