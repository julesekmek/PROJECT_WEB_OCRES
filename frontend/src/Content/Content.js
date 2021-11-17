import React from 'react';
import './Content.css';
import Nav from './BandeauHaut';
import JoueurStar from './JoueurStar';

import {Row} from 'react-bootstrap';
import {Container} from 'react-bootstrap';
import {Col} from 'react-bootstrap';

export default class Content extends React.Component {
    
    render() {
        return(           
            <Container fluid className="kobefond">
                <Row>
                    <Nav/>
                </Row>
                <Row className="Hero">
                    <Col xs={1}>
                    </Col>
                    <Col xs={4}>
                        <div className="NBAtitre"><b>NBA</b></div>
                        <div className="Stattitre"><b>STATISTICS</b></div>
                        <div className="description">Made by React API developped by Mathis PONCET and Jules Ekmekdjian</div>
                    </Col>
                    <Col xs={7}></Col>

                </Row>
                <Row className="separer"></Row>
                <Row className="players">
                    <Col xs={3} className="Giannis">
                            <JoueurStar/>     
                    </Col>
                    <Col xs={3} className="Luka">
                        
                    </Col>
                    <Col xs={3} className="Lillard">
                        
                    </Col>
                    <Col xs={3} className="Stephen">
                        
                    </Col>
                </Row>
            </Container>
        );
    }
}