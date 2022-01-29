import React, { useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import useAuth from '../../../Authorization/hooks/useAuth';



const PostReview = () => {

    const { user } = useAuth();
    const [review, setReview] = useState({})

    // console.log(email)
    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newreview = { ...review };
        newreview[field] = value;
        setReview(newreview);
        console.log(review);
    }

    const submitReview = e => {
        e.preventDefault();

        const name = review.name;
        const subject = review.subject;
        const thought = review.thought;
        const email = user.email;
        const getdate = new Date();
        const date = getdate.toDateString();

        const reviewAdd = { name, subject, email, thought, date };
        fetch('https://quiet-forest-82433.herokuapp.com/reviews', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviewAdd)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Succesfully Reviewd.')
                    e.target.reset();
                }
            })

    }


    return (
        <div className='review'>
            <Container>
                <Row>
                    <Col lg={3} md={3}></Col>
                    <Col lg={6}>
                        <h3>Post your thoughts about our services.</h3>
                        <form onSubmit={submitReview}>
                            <Form.Group className="mb-3" controlId="name">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="name" name="name" placeholder="" onChange={handleOnChange} required />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="subject">
                                <Form.Label>Subject</Form.Label>
                                <Form.Control type="text" name="subject" placeholder="Optional" onChange={handleOnChange} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="userName">
                                <Form.Label>Write your thoughts</Form.Label>
                                <textarea onChange={handleOnChange} class="form-control" id="exampleFormControlTextarea1" rows="3" name="thought" required></textarea>
                            </Form.Group>
                            <button type='submit' className='uni_btn'>Post Review</button>


                        </form>

                    </Col>
                </Row>
            </Container>

        </div>
    );
};

export default PostReview;