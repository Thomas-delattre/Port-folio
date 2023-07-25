import React from 'react';
import { NavLink } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <div className="notFound">
                <div className="notFound-content">
                    <h2>Erreur 404</h2>
                    <NavLink to="/">
                        Retour à l'accueil <i className='fas fa-home'></i>
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default NotFound;