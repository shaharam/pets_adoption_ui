import React, {Component} from 'react';
import './homepage.css'

class Homepage extends Component {

    isAuthenticated(){
        return (localStorage.getItem('userId') != null);
    }

    guidingToHandOver(){
        let guidePath = "/Hand_over";
        if(!this.isAuthenticated()){
            guidePath = '/Log_in'
        }
        return guidePath;
    }

    updateLastPage(){
        sessionStorage.setItem('lastPage' , '/Hand_over');
    }

    render() {
        sessionStorage.setItem('lastPage' , '/' );
        return (
            <div className="container-fluid">

                <h1>
                    ADOPT US.
                    <br/>
                    WE NEED YOUR HELP.
                </h1>
                <br/>
                <form>
                    <button type="submit" formAction='/Adopt'>ADOPT A PET</button>
                    <button type="submit" formAction={this.guidingToHandOver()} onClick={this.updateLastPage}>HAND OVER A PET</button>
                </form>
            </div>
        );
    }
}

export default Homepage;