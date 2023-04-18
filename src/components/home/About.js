import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';

import AboutImg from '../../assets/images/about.png';
import CustomButton from '../../shared/CustomButton';

const About = () => {
    return (
        <Container className='mt-5'>
            <Row className='align-items-center justify-content-center'>
                <Col xs='12' md='6' data-aos="fade-right">
                    <Image fluid src={AboutImg} alt='About' loading='lazy' />
                </Col>
                <Col xs='12' md='6'>
                    <h3 className='left-small-heading'>ABOUT US</h3>
                    <h2 className='left-big-heading'>We Provide Trusted <span className='special-heading'>Cab Service</span> In The World</h2>
                    <div className='heading-divider'></div>
                    <p className='detail-text'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.</p>
                    <ul className='detail-text about-list'>
                        <li>At vero eos et accusamus et iusto odio.</li>
                        <li>At vero eos et accusamus et iusto odio.</li>
                        <li>At vero eos et accusamus et iusto odio.</li>
                        <li>At vero eos et accusamus et iusto odio.</li>
                        <li>At vero eos et accusamus et iusto odio.</li>
                    </ul>
                    <CustomButton>LEARN MORE ABOUT US</CustomButton>
                </Col>
            </Row>
        </Container>
    )
}

export default About;
