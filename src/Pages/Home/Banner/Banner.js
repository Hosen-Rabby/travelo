import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Slider from 'react-slick';
import '../../../assets/style.css';

const Banner = () => {
    const [items, setItems] = useState([]);
    console.log(items);
    useEffect(() => {
        const url = './banner.json';
        fetch(url)
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])
    // console.log(images)
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };


    return (
        <div className='banner'>
            {/* <h2> Banner </h2> */}

            <Slider {...settings}>
                {items.map(img =>
                    <img src={img.img} />
                )}
            </Slider>


        </div>
    );
};


export default Banner;