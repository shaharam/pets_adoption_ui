import React, {Component} from 'react';
import './hand_over.css'
import axios from 'axios';

const pets_url = 'http://localhost:8080/pas/v1/admin/pets/adoption/pets/';

class Hand_over extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: []
        };
        this.getAllCategories();
    }

    state = {
    name :'',
    age: null ,
    color:'',
    weight: null ,
    availability:true,
    description:'',
    category: '',
    picture_link:'',
    userId:'' ,
    };

    getAllCategories() {
        axios.get(pets_url + 'categories')
            .then(res => {
                const categories = res.data;
                this.setState({ categories });
            });
    }

    changeData = (event) => {
        event.preventDefault();
        this.setState({
            [event.target.name]: event.target.value
        })

    };

    postData = (event)=>{
        event.preventDefault();
        const name = this.state.name;
        const age = this.state.age;
        const color = this.state.color;
        const weight = this.state.weight;
        const availability = this.state.availability;
        const description = this.state.description;
        const category = this.state.category;
        const picture_link = this.state.picture_link;
        const userId = 'galbt91@gmail.com';
        const data = {name , age , color , weight , availability, description , category , picture_link ,userId};
        axios.post('http://localhost:8080/pas/v1/admin/pets/adoption/pets/pet' , data)
            .then(res =>{
                console.log(res.data);
                alert('Added successfully !')
            }).catch(error =>{
                console.log(error);
                alert(error.response.data.message)
        })
    };

    render() {
        const categories = [];
        for (const value of this.state.categories) {
            categories.push(<option value={value}>{value}</option>)
        }

        return (
            <div className="container-fluid">

                <h1>
                    Hand over your pet
                </h1>

                <form id="hand_over" onSubmit={this.postData}>
                    <br/>
                    <select id="category" name="category" form="hand_over" onChange={this.changeData} required>
                        <option value="" disabled selected>Select category</option>
                        {categories}    {/*/adding all categories to the drop down list*/}
                    </select>
                    <br/>

                    <br/>
                    <input type="text" id="name" name="name" placeholder='Name' onChange={this.changeData}/>
                    <br/>

                    <br/>
                    <input type="number" id="age" name="age" placeholder='Age' onChange={this.changeData} min="1" max="120"/>
                    <br/>

                    <br/>
                    <input type="text" id="color" name="color" placeholder='Color' onChange={this.changeData} required/>
                    <br/>

                    <br/>
                    <input type="number" id="weight" name="weight" placeholder='Weight in Kg' onChange={this.changeData} min="1"/>
                    <br/>

                    <br/>
                    <input type="file" id="picture" name="picture_link"  onChange={this.changeData} accept="image/*" required/>
                    <br/>

                    <br/>
                    <textarea id="description" name="description" placeholder='Description' onChange={this.changeData} rows="3" cols="50" maxLength="100"
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