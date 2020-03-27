import React, {Component} from 'react';
import './adopt.css'
import data from '../../data/data'

class Adopt extends Component {
    constructor(props) {
        super(props)
        this.state = data
        }

    renderTableHeader() {
        let header = Object.keys(this.state[0]);

        return header.map((key, index) => {
            return <th key={index}>{key.toUpperCase()}</th>
        })
    }

    renderTableData() {
        return this.state.map((pet, index) => {
            const {name, age, color, weight, description, category, picture_link} = pet; //destructuring
            return (
                <tr key={name}>
                    <td>{name}</td>
                    <td>{age}</td>
                    <td>{color}</td>
                    <td>{weight}</td>
                    <td>{description}</td>
                    <td>{category}</td>
                    {/* eslint-disable-next-line react/jsx-no-target-blank */}
                    <td><a href={picture_link} target="_blank">See Me!</a></td>
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
                            {/*<th>#</th>*/}
                            <th>NAME</th>
                            <th>AGE</th>
                            <th>COLOR</th>
                            <th>WEIGHT</th>
                            <th>DESCRIPTION</th>
                            <th>CATEGORY</th>
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