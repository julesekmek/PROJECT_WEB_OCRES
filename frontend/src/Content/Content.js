import React from 'react';
import './Content.css';
import Nav from './BandeauHaut';
import JoueurStar from './JoueurStar';
import axios from "axios";


import Giannis from '../images/Giannis.png';
import Lillard from '../images/Lillard.png';
import Luka from '../images/Luka.png';
import Stephen from '../images/Stephen.png';

import {Row} from 'react-bootstrap';
import {Container} from 'react-bootstrap';
import {Col} from 'react-bootstrap';

export default class Content extends React.Component {
    constructor(props){
    super(props)
    this.state={
        giannis:[]
                      }
              }
async componentDidMount() {
    const url = " https://www.balldontlie.io/api/v1/players/15"
    let result = null;
    try{
            result = await axios(url, {
            headers: {
            Accept: "application/json"
                    }
                                       })
    } catch(e) {
            console.log(e)
                }
            this.setState({giannis: result.data})
                            }


    render() {

        const{giannis} = this.state;
        console.log({giannis})
        var Giannis_name = giannis.first_name
        var Giannis_lastname = giannis.last_name
        var Giannis_heigh = giannis.height_inches
        console.log({giannis})

        let Joueurs= [{
            nom : Giannis_name,
            prenom : Giannis_lastname,
            points : Giannis_heigh,
            rebonds : 11.5,
            passed : 6.5
        },
        {
            nom : 'LILLARD',
            prenom : 'Damian',
            points : 29.1,
            rebonds : 11.1,
            passed : 6.1
        },
        {
            nom : 'DONCIC',
            prenom : 'Luka',
            points : 29.2,
            rebonds : 11.2,
            passed : 6.2
        },
        {
            nom : 'CURRY',
            prenom : 'Stephen',
            points : 29.3,
            rebonds : 11.3,
            passed : 6.3
        },
        ];
        return(           
            <Container fluid className="kobefond">
                <Row>
                    <Nav/>
                </Row>
                <Row className="Hero">
                    <Col xs={1}>
                    </Col>
                    <Col xs={4}>
                        <div className="espaceTitre">
                            <div className="NBAtitre"><b>NBA</b></div>
                            <div className="Stattitre"><b>STATISTICS</b></div>
                        </div>
                        <div className="description">Made by React API developped by Mathis PONCET and Jules Ekmekdjian</div>
                    </Col>
                    <Col xs={7}></Col>

                </Row>
                <Row className="separer"></Row>
                <Row className="players">
                    <Col xs={6} md={3}>
                            <JoueurStar nom={Joueurs[0].nom}
                                        prenom={Joueurs[0].prenom}
                                        points={Joueurs[0].points}
                                        rebonds={Joueurs[0].rebonds}
                                        passed={Joueurs[0].passed}
                                        image={Giannis}/>  
                            <br></br>   
                    </Col>
                    <Col xs={6} md={3}>
                            <JoueurStar nom={Joueurs[1].nom}
                                        prenom={Joueurs[1].prenom}
                                        points={Joueurs[1].points}
                                        rebonds={Joueurs[1].rebonds}
                                        passed={Joueurs[1].passed}
                                        image={Lillard}/> 
                            <br></br> 
                    </Col>
                    <Col xs={6} md={3}>
                            <JoueurStar nom={Joueurs[2].nom}
                                        prenom={Joueurs[2].prenom}
                                        points={Joueurs[2].points}
                                        rebonds={Joueurs[2].rebonds}
                                        passed={Joueurs[2].passed}
                                        image={Luka}/>
                            <br></br>
                    </Col>
                    <Col xs={6} md={3}>
                            <JoueurStar nom={Joueurs[3].nom}
                                        prenom={Joueurs[3].prenom}
                                        points={Joueurs[3].points}
                                        rebonds={Joueurs[3].rebonds}
                                        passed={Joueurs[3].passed}
                                        image={Stephen}/>  
                            <br></br>
                    </Col>
                </Row>
            </Container>
        );
    }
}






  