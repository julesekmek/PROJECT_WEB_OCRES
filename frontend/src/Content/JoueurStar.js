import React from 'react';
import './JoueurStar.css';

import {Row} from 'react-bootstrap';
import {Col} from 'react-bootstrap';

export default class JoueurStar extends React.Component {
    
    render() {
        return(           
            <div className="sort">
                
                <img src={this.props.image} className="image" alt="imgJoueur"></img>
                <div className="nomJoueur">
                    {this.props.prenom}<br></br>{this.props.nom}
                </div>
                <div className="mesStats">
                    <b>{this.props.points}</b> pts/m - <b>{this.props.passed}</b> pd/m - <b>{this.props.rebonds}</b> rb/m
                </div>
                <div className="espace"></div>
                
                
            </div>
        );
    }
}