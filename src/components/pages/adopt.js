import React, {Component} from 'react';
import './adopt.css'
import axios from "axios";

const pets_url = 'http://localhost:8080/pas/v1/admin/pets/adoption/pets/';

class Adopt extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pets: [],
            categories: [],
            value: 'ALL'
        };
        this.categoryChange = this.categoryChange.bind(this);
        this.categorySubmit = this.categorySubmit.bind(this);
        this.getAllPets();
        this.getAllCategories();
    }

    getAllPets() {
        axios.get(pets_url + 'get/all')
            .then(res => {
                const pets = res.data;
                this.setState({ pets });
            })
    }

    getPetByCategory() {
        axios.get(pets_url + 'category/' + this.state.value)
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

    renderTableData() {
        return this.state.pets.map((pet) => {
            const images = this.importImgs(require.context('../../img/animals', false, /\.(png|jpe?g|svg)$/));
            let {name, age, color, weight, description, category, picture_link} = pet; //destructuring
            if (age === 0) {
                age = ""
            }
            if (weight === 0.0) {
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
                    <td><a href={images[picture_link]} target="_blank" rel="noopener noreferrer">See Me!</a></td>
                    <td><a href="FIX URL">Adopt Me</a></td>
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

    categoryChange(event) {
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