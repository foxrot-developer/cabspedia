import React from 'react';
import { Col, Container, Image, Nav, Navbar, Row } from 'react-bootstrap';
import { BsFillEnvelopeFill, BsFillTelephoneFill, BsClockFill } from 'react-icons/bs';
import { Link, useNavigate } from 'react-router-dom';

import '../assets/css/custom-navbar.css';
import Logo from '../assets/images/logo.png';
import CustomButton from '../shared/CustomButton';

const CustomNavbar = () => {

    const navigate = useNavigate();

    return (
        <React.Fragment>
            <div className='contact-section'>
                <Container>
                    <Row>
                        <Col xs='12' lg='4'>
                            <div className='d-flex align-items-center justify-content-center'>
                                <BsFillEnvelopeFill className='contact-icon' />
                                <p className='p-0 m-0 contact-info'>info@example.com</p>
                            </div>
                        </Col>
                        <Col xs='12' lg='4'>
                            <div className='d-flex align-items-center justify-content-center'>
                                <BsFillTelephoneFill className='contact-icon' />
                                <p className='p-0 m-0 contact-info'>123456789</p>
                            </div>
                        </Col>
                        <Col xs='12' lg='4'>
                            <div className='d-flex align-items-center justify-content-center'>
                                <BsClockFill className='contact-icon' />
                                <p className='p-0 m-0 contact-info'>Mon - Fri</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div>
                <Navbar collapseOnSelect sticky="top" expand="lg">
                    <Container>
                        <Navbar.Brand as={Link} to='/'><Image fluid className='main-logo' src={Logo} alt='Logo' loading='lazy' /></Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link as={Link} eventKey="1" to='/'>Home</Nav.Link>
                                <Nav.Link as={Link} eventKey="2" to='/about'>About Us</Nav.Link>
                                <Nav.Link as={Link} eventKey="3" to='/'>Privacy Policy</Nav.Link>
                                <Nav.Link as={Link} eventKey="4" to='/contact'>Contact Us</Nav.Link>
                            </Nav>
                            <CustomButton onClick={() => navigate('/login')}>LOGIN / REGISTER</CustomButton>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </React.Fragment>
    )
}

export default CustomNavbar;
