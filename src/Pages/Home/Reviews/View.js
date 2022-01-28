import React from 'react';
import { Col } from 'react-bootstrap';
import '../../../assets/style.css';


const View = (props) => {
    console.log(props)
    const { name, date, subject, thought } = props.view
    return (
        <>
            <Col lg={12}>
                <div className='review_p'>
                    <p>"{thought}"</p>
                    <h4>{name}</h4><span>{date}</span>
                </div>
            </Col>
        </>
    );
};

export default View;