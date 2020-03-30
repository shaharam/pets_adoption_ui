import React, {Component} from 'react';
import './hand_over.css'
class Hand_over extends Component {
    render() {
        return (
            <div className="container-fluid">

                <h1>
                    Hand over your pet
                </h1>

                <form id="hand_over">
                    <label htmlFor="category">Category:</label>
                    <br/>
                    <select id="category" name="category" form="hand_over" required>
                        <option value="" disabled selected>Select category</option>
                        <option value="DOGS">DOGS</option>
                        <option value="CATS">CATS</option>
                        <option value="FISHES">FISHES</option>
                        <option value="SNAKES">SNAKES</option>
                        <option value="HORSES">HORSES</option>
                        <option value="PARROTS">PARROTS</option>
                        <option value="OWLS">OWLS</option>
                        <option value="BIRDS">BIRDS</option>
                        <option value="RABBITS">RABBITS</option>
                        <option value="SQUIRRELS">SQUIRRELS</option>
                        <option value="LIZARDS">LIZARDS</option>
                        <option value="IGUANAS">IGUANAS</option>
                        <option value="HEDGEHOGS">HEDGEHOGS</option>
                        <option value="BATS">BATS</option>
                        <option value="TURTLES">TURTLES</option>
                        <option value="SHEEP">SHEEP</option>
                        <option value="FERRETS">FERRETS</option>
                        <option value="DONKEY">DONKEY</option>
                        <option value="SPIDERS">SPIDERS</option>
                    </select>
                    <br/>

                    <label htmlFor="name">Name:</label>
                    <br/>
                    <input type="text" id="name" name="name" placeholder='Name' required/>
                    <br/>

                    <label htmlFor="age">Age:</label>
                    <br/>
                    <input type="number" id="age" name="age" placeholder='Age' min="1" max="120" required/>
                    <br/>

                    <label htmlFor="color">Color:</label>
                    <br/>
                    <input type="text" id="color" name="color" placeholder='Color' required/>
                    <br/>

                    <label htmlFor="weight">Weight:</label>
                    <br/>
                    <input type="number" id="weight" name="Weight" placeholder='Weight in Kg' min="1" required/>
                    <br/>

                    <label htmlFor="picture">Picture:</label>
                    <br/>
                    <input type="file" id="picture" name="picture" accept="image/*" required/>
                    <br/>

                    <label htmlFor="description">Description:</label>
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