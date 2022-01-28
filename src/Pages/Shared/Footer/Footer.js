import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../../../assets/style.css';

const Footer = () => {
    return (
        <div className='footer'>
            <Container>
                <Row>
                    <Col lg={4} md={4}>
                        <h3>Travelo</h3>
                        <p>Most amazing places you can get from here, tourists give their suggestion and experience that you can find your places.</p>
                    </Col>
                    <Col lg={4} md={4}>
                        <h3>Sales Department</h3>
                        <p>Mon-Tue(8:00am - 7:00pm)</p>
                    </Col>
                    <Col lg={4} md={4}>
                        <h3>Sales Department</h3>
                        <p>Mon-Tue(8:00am - 7:00pm)</p>
                    </Col>
                </Row>
                <Row className='text-center'>
                    <span>© COPY RIGHT 2022 | GoForward</span>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;