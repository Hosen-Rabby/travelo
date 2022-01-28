import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Rating from 'react-rating';
import '../../assets/style.css';
import { Col, Container, Row } from 'react-bootstrap';



const SinglePlace = () => {
    const { id } = useParams();
    const [singlePlace, setSinglePlace] = useState({});
    console.log(id);
    console.log(singlePlace);
    const { _id, title, img1, description, date, location, cost } = singlePlace;

    useEffect(() => {
        const url = `http://localhost:5000/places/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setSinglePlace(data))
    }, []);

    return (
        <div className='single_place'>
            <img src={img1} alt='banner-place' className='w-100'></img>

            <div className='places_details'>
                <Container>
                    <Row>
                        <Col>
                        </Col>
                    </Row>
                </Container>
                <h4>{title}</h4>
                <p>{date}</p>
                <p>{location}</p>
                <p>{description}</p>
                <p>Treat yourself with a journey to your inner self. Visit a mystique Tibet and start your spiritual adventure. We promise, you’ll enjoy every step you make.</p>
                <p>Aproximate expense: ${cost}</p>
                <Link to={`/places/${_id}`}>
                    <button>Read More</button>
                </Link>

                <Rating
                    initialRating={4}
                    fullSymbol="fas fa-star"
                    readonly
                />

            </div>
        </div>
    );
};

export default SinglePlace;