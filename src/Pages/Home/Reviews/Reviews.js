import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import View from './View';
import '../../../assets/style.css';
import Slider from 'react-slick';


const Reviews = () => {
    const [views, setViews] = useState([])
    useEffect(() => {
        const url = 'https://quiet-forest-82433.herokuapp.com/reviews'
        fetch(url)
            .then(res => res.json())
            .then(data => setViews(data))

    }, [])


    var settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 500,
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 755,
                settings: {
                    arrows: false,
                    dots: true,

                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,

                }
            }
        ]
    };


    return (
        <div className='view_Review' id='reviews'>
            <Container>
                <Row>
                    <h2>Testimonials</h2>
                </Row>
                <Row>
                    <Col lg={12}>
                        <Slider {...settings}>
                            {
                                views.map(view => <View
                                    key={view._id}
                                    view={view}
                                ></View>)
                            }
                        </Slider>
                    </Col>


                </Row>
            </Container>
        </div>
    );
};

export default Reviews;