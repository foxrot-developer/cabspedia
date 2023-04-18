import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { BiRightArrowAlt } from 'react-icons/bi';

import CustomButton from '../../shared/CustomButton';
import '../../assets/css/book.css';

const Book = () => {
    return (
        <div className='book-section w-100'>
            <Container>
                <Row>
                    <Col xs='12' lg='8'>
                        <h2 className='book-title'>Book Your Cab It's Simple And Affordable</h2>
                        <p className='detail-text'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout point of using is that it has normal distribution of letters.</p>
                    </Col>
                    <Col xs='12' lg='4'>
                        <CustomButton>BOOK YOUR CAB <BiRightArrowAlt className='next-icon' /></CustomButton>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Book;
