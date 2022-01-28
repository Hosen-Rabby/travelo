import React, { useState } from 'react';
import { Button, Col, Container, Form, Row, Spinner } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../../Authentication/hooks/useAuth';
import '../../../assets/style.css';

const Login = () => {
    const { user, logInUser, authError, loading } = useAuth();
    const [inputData, setInputData] = useState({});
    const location = useLocation();
    const navigate = useNavigate();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInputData = { ...inputData };
        newInputData[field] = value;
        setInputData(newInputData);
    }

    const submitRegister = e => {
        e.preventDefault();
        logInUser(inputData.email, inputData.password, location, navigate);
        e.target.reset();
    }

    if (loading) {
        return <Spinner animation="border" />
    }
    return (
        <div className='login'>
            <Container>
                <Row>
                    <Col lg={3} md={3}></Col>
                    <Col lg={6} md={6}>
                        {
                            user?.email ?
                                <h6>Your are inside</h6>
                                :
                                <div>
                                    <Form onSubmit={submitRegister}>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                            <Form.Label>Email</Form.Label>
                                            <Form.Control type="email" placeholder="Enter Email" name="email" required onChange={handleOnChange} />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                            <Form.Label>Password</Form.Label>
                                            <Form.Control type="password" placeholder="Enter Password" name="password" required onChange={handleOnChange} />
                                        </Form.Group>
                                        <button type="submit" className='logout_btn'>Login</button>
                                    </Form>
                                    <div>{authError && <p className='log_error'>Please enter right email/password.</p>}</div>
                                    <div>
                                        <h4>No accout yet! Create new account.</h4>
                                        <Link to="/register" className='uni_btn'>Register</Link>
                                    </div>
                                </div>

                        }
                    </Col>
                </Row>

            </Container>
        </div>
    );
};

export default Login;