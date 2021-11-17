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
                <Nav/>
            </Container>
        );
    }
}