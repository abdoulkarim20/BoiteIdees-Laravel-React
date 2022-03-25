import React from 'react';
import { NavLink } from "react-router-dom";
const Header = () => {
    return (
        <div>
            <nav className="px-5 navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" exact to="/" href="#">LARAVEL API-REACT</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link active" exact to="/" aria-current="page" href="#">Accueil</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link active" exact to="/Ajout" aria-current="page" href="#">ajouter une idee</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;