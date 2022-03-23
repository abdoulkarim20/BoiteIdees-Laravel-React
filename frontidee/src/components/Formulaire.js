import axios from 'axios';
import React, { Component } from 'react';
class Formulaire extends Component {
    state = {
        titre: "",
        description: "",
        etat: 0
    }
    inputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }
    saveIdee = async (e) => {
        e.preventDefault();
        const ideeArray = {
            titre: this.state.titre,
            description: this.state.description,
            etat: 0
        }
        const add = await axios.post("http://127.0.0.1:8002/api/idees", this.state)
            .then((respons) => console.log(respons));
        if (add) {

            console.log(ideeArray);
            this.state = {
                titre: "",
                description: "",
                etat: 0
            }
        }
    }
    render() {
        return (
            <div className='container mt-5'>
                <h1 className='text-center'>Proposition d'idee</h1>
                <div className='row'>
                    <div className='col-6'>
                        <form onSubmit={this.saveIdee}>
                            <div className="mb-3">
                                <label htmlFor="titre" className="form-label">Votre sujet</label>
                                <input type="text" className="form-control" name='titre' onChange={this.inputChange} value={this.state.titre} id="titre" aria-describedby="emailHelp" />
                            </div>
                            <div className="form-floating">
                                <textarea className="input-message form-control" name='description' onChange={this.inputChange} value={this.state.description} placeholder="Leave a comment here" id="suggestion"></textarea>
                                <label htmlFor="suggestion">Votre idee ici</label>
                            </div>
                            <button type="submit" className="btn btn-primary mt-3">Envoyer</button>
                        </form>
                    </div>
                    <div className='col-6'>
                        <img src="/fille.svg" className="img-fluid" alt="" />
                    </div>
                </div>
            </div>
        );
    }
};

export default Formulaire;