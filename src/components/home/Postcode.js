import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';

import CodeImg from '../../assets/images/code.png';
import '../../assets/css/postcode.css';

const Postcode = () => {

    const codes = [
        { img: CodeImg, route: 'SW17 to Gatwick Airport', price: 75.08 },
        { img: CodeImg, route: 'SW17 to Gatwick Airport', price: 75.08 },
        { img: CodeImg, route: 'SW17 to Gatwick Airport', price: 75.08 },
    ];

    return (
        <Container className='mt-5'>
            <Row>
                {codes.map((code, index) => {
                    return <Col key={index} xs='12' md='6' lg='4'>
                        <div>
                            <Image fluid src={code.img} />
                            <h5 className='route-name'>{code.route}</h5>
                            <p className='from-route'>{`from £${code.price}`}</p>
                        </div>
                    </Col>
                })}
            </Row>
        </Container>
    )
}

export default Postcode;
