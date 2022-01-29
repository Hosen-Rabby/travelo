import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../../assets/style.css';
import Rating from 'react-rating';

const PlaceShow = (props) => {
    const { _id, title, img1, description, date, location, cost, review } = (props.place);
    console.log(img1);
    console.log(review);
    // console.log(img[2].2);
    // img.map(image=> 
    // setWebImg(image))

    return (
        // <div className='show_places'>
        <Col lg={12}>
            <div className='places'>
                <Row>
                    <Col lg={6}>
                        <img src={img1} alt='img' className='img-fluid' />
                    </Col>
                    <Col lg={6}>
                        <div className='places_details'>
                            <h4>{title}</h4>
                            <p>{date}</p>
                            <p>{location}</p>
                            <p>Treat yourself with a journey to your inner self. Visit a mystique Tibet and start your spiritual adventure. We promise, you’ll enjoy every step you make.</p>

                            <Rating
                                initialRating={review}
                                fullSymbol="fas fa-star"
                                emptySymbol="far fa-star"
                                readonly
                            />
                            <br></br>
                            <Link to={`/places/${_id}`}>
                                <button className='btn_more'>Read More</button>
                            </Link>


                        </div>
                    </Col>
                </Row>
            </div>


        </Col>
        // </div>
    );
};

export default PlaceShow;