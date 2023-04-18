import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

import Logo from '../assets/images/logo.png';
import '../assets/css/custom-footer.css';

const CustomFooter = () => {
    return (
        <div className='footer-main'>
            <Container>
                <Row>
                    <Col xs='12' md='6' lg='4' className='text-center'>
                        <Image fluid className='main-logo' src={Logo} alt='Logo' loading='lazy' />
                        <p className='company-desc'>We are many variations of passages available but the majority have suffered alteration in some form by injected humour words believable.</p>
                    </Col>
                    <Col xs='12' md='6' lg='4' className='text-center'>
                        <h4 className='footer-section-heading'>Quick Links</h4>
                        <div className='heading-divider'></div>
                        <div className='d-flex align-items-center justify-content-center'>
                            <ul className='footer-links'>
                                <li className='page-link'>About</li>
                                <li className='page-link'>Contact Us</li>
                                <li className='page-link'>Booking</li>
                            </ul>
                            <ul className='footer-links'>
                                <li className='page-link'>About</li>
                                <li className='page-link'>Contact Us</li>
                                <li className='page-link'>Booking</li>
                            </ul>
                        </div>
                    </Col>
                    <Col xs='12' md='6' lg='4' className='text-center'>
                        <h4 className='footer-section-heading'>Follow Us</h4>
                        <div className='heading-divider'></div>
                        <div className='d-flex align-items-center justify-content-center'>
                            <FaFacebookF className='social-link' />
                            <FaTwitter className='social-link' />
                            <FaInstagram className='social-link' />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default CustomFooter;
