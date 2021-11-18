import React from 'react';
import './Match.css';

import {Row} from 'react-bootstrap';
import {Col} from 'react-bootstrap';

export default class Match extends React.Component {
    
    render() {
        return(
            
            <Row className="monMatch">
                <Col className="equipe1" xs={3}>
                    {this.props.ville1} <br></br><b>{this.props.equipe1}</b>
                </Col>
                <Col className="score" xs={6}>
                    <b>{this.props.score1}</b> - <b>{this.props.score2}</b>
                </Col>
                <Col className="equipe2" xs={3}>
                    {this.props.ville2} <br></br><b>{this.props.equipe2}</b>
                </Col>
            </Row>

        );
    }
}