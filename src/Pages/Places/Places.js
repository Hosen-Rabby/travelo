import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import PlaceShow from './PlaceShow';
import '../../assets/style.css';

const Places = () => {
    const [places, setPlaces] = useState([]);
    const [page, setPage] = useState(0);
    // const [newPage, setNewPage] = useState(0);
    const [pageCount, setPageCount] = useState(0);
    console.log(places);

    const size = 10;
    useEffect(() => {
        fetch(`https://whispering-beach-20843.herokuapp.com/places?page=${page}&&size=${size}`)
            .then(res => res.json())
            .then(data => {
                setPlaces(data.place);
                const count = data.count;
                const pageNumber = Math.ceil(count / size);
                setPageCount(pageNumber);
                });
           
    }, [page]);


    return (
        <div className='places'>
            <Container>
                <Row>
                    <h4 className='text-center'>Find Best Places Recomand</h4>
                </Row>
                <Row>
                    {
                        places.map(place => <PlaceShow
                            place={place}
                        >
                        </PlaceShow>)
                    }
                    <div className='pagination'>
                        {
                            [...Array(pageCount).keys()].map(number=>
                                // className = {page ? 'selected': ''}
                                <button
                                key = {number}
                                onClick = {() => setPage(number)}
                                >{number+1}</button>)
                        }
                    </div>
                </Row>
            </Container>

        </div>
    );
};

export default Places;;