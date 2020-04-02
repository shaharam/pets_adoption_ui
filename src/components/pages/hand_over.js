import React, {Component} from 'react';
import axios from 'axios';
import './hand_over.css'
// import data from "../../data/data";

class Hand_over extends Component {
    state = {
        categories: []
    };

    getCategories() {
        axios.get(`http://localhost:8080/pas/v1/admin/pets/adoption/pets/categories`)
            .then(res => {
                const categories = res.data;
                this.setState({ categories });
            })
    }

    render() {
        this.getCategories();
        const categories = [];
        for (const value of this.state.categories) {
            categories.push(<option value={value}>{value}</option>)
        }

        return (
            <div className="container-fluid">

                <h1>
                    Hand over your pet
                </h1>

                <form id="hand_over">
                    <br/>
                    <select id="category" name="category" form="hand_over" required>
                        <option value="" disabled selected>Select category</option>
                        {categories}
                        {/*<option value="DOGS">DOGS</option>*/}
                        {/*<option value="CATS">CATS</option>*/}
                        {/*<option value="FISHES">FISHES</option>*/}
                        {/*<option value="SNAKES">SNAKES</option>*/}
                        {/*<option value="HORSES">HORSES</option>*/}
                        {/*<option value="PARROTS">PARROTS</option>*/}
                        {/*<option value="OWLS">OWLS</option>*/}
                        {/*<option value="BIRDS">BIRDS</option>*/}
                        {/*<option value="RABBITS">RABBITS</option>*/}
                        {/*<option value="SQUIRRELS">SQUIRRELS</option>*/}
                        {/*<option value="LIZARDS">LIZARDS</option>*/}
                        {/*<option value="IGUANAS">IGUANAS</option>*/}
                        {/*<option value="HEDGEHOGS">HEDGEHOGS</option>*/}
                        {/*<option value="BATS">BATS</option>*/}
                        {/*<option value="TURTLES">TURTLES</option>*/}
                        {/*<option value="SHEEP">SHEEP</option>*/}
                        {/*<option value="FERRETS">FERRETS</option>*/}
                        {/*<option value="DONKEY">DONKEY</option>*/}
                        {/*<option value="SPIDERS">SPIDERS</option>*/}
                    </select>
                    <br/>

                    <br/>
                    <input type="text" id="name" name="name" placeholder='Name'/>
                    <br/>

                    <br/>
                    <input type="number" id="age" name="age" placeholder='Age' min="1" max="120"/>
                    <br/>

                    <br/>
                    <input type="text" id="color" name="color" placeholder='Color' required/>
                    <br/>

                    <br/>
                    <input type="number" id="weight" name="Weight" placeholder='Weight in Kg' min="1"/>
                    <br/>

                    <br/>
                    <input type="file" id="picture" name="picture" accept="image/*" required/>
                    <br/>

                    <br/>
                    <textarea id="description" name="description" placeholder='Description' rows="3" cols="50" maxLength="100"
                              required>
                    </textarea>
                    <br/>
                    <br/>
                    <input type="submit" id="hand_over" value="Hand Over!"/>
                </form>

            </div>
        );
    }
}

export default Hand_over;