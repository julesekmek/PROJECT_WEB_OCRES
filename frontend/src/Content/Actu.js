import React from 'react';
import './Actu.css';
import Nav from './BandeauHaut';

import {Row} from 'react-bootstrap';
import {Container} from 'react-bootstrap';
import {Col} from 'react-bootstrap';

export default class Actu extends React.Component {
    
    render() {
        return(
            
            <Container fluid className="championFond">
                <Row>
                    <Nav/>
                </Row>
                <Row className="separer"></Row>
                <Row>
                    <Col  className="mesActus" xs={5}>
                    ici
                    </Col>
                    <Col className="mesActus" xs={5}>
                    la
                    </Col>
                </Row>
            </Container>
        );
    }
}