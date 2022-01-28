import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import useAuth from '../../../Authentication/hooks/useAuth';
import { Link, useLocation, useNavigate } from 'react-router-dom';


const Register = () => {

    const { user, registerUser, authError, varifyEmail } = useAuth();
    const [inputData, setInputData] = useState({});
    const location = useLocation();
    const navigate = useNavigate();
    console.log(user);

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInputData = { ...inputData };
        newInputData[field] = value;
        setInputData(newInputData);
        console.log(newInputData);
    }


    const submitRegister = e => {
        e.preventDefault();
        registerUser(inputData.email, inputData.password, location, navigate);
        // registerUser(inputData.email, inputData.password);
        e.target.reset();

        const name = inputData.fullName;
        const userName = inputData.userName;
        const email = inputData.email;
        const password = inputData.password;
        const userInfo = { name, userName, email, password };
        fetch('http://localhost:5000/users', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userInfo)
        })
            .then(res => res.json())
            .then(data => {
                if (authError) {
                    if (data.insertedId) {
                        alert('Succesfully registerd')
                        e.target.reset();
                    }
                }
            })
    }





    return (
        <div className='regis'>
            <Container>

                <Row>
                    <Col lg={3} md={3}></Col>

                    <Col lg={6} md={6}>
                        <Row>
                            <div>
                                <Form onSubmit={submitRegister}>
                                    <Form.Group className="mb-3" >
                                        <Form.Label>Full Name</Form.Label>
                                        <Form.Control type="name" placeholder="Enter Full Name" name="fullName" required onChange={handleOnChange} />
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Label>User Name</Form.Label>
                                        <Form.Control type="name" placeholder="Enter User Name" name="userName" required onChange={handleOnChange} />
                                    </Form.Group>
                                    <Form.Group className="mb-3" >
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control type="email" placeholder="Enter Email" name="email" required onChange={handleOnChange} />
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" placeholder="Enter Password" name="password" required onChange={handleOnChange} />
                                    </Form.Group>
                                    <button type="submit" className='logout_btn'>Register</button>
                                </Form>
                            </div>
                        </Row>
                        <Row>
                            <h4>Already has an account? </h4>
                            <div>{authError && <p className='log_error'>Email is already taken, try with another one.</p>}</div>
                            <Link to="/login" className='uni_btn'>Login</Link>
                        </Row>
                    </Col>
                </Row>

            </Container>

        </div>
    );
};

export default Register;