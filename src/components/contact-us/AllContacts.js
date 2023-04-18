import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { GrMapLocation } from 'react-icons/gr';
import { FiPhoneCall } from 'react-icons/fi';
import { MdEmail } from 'react-icons/md';
import { BsClockFill } from 'react-icons/bs';

import '../../assets/css/all-contacts.css';

const AllContacts = () => {

    const contacts = [
        { icon: <GrMapLocation className='contact-info-icon' />, title: 'Location', description: 'United Kingdom' },
        { icon: <FiPhoneCall className='contact-info-icon' />, title: 'Call Us', description: '123456789' },
        { icon: <MdEmail className='contact-info-icon' />, title: 'Email Us', description: 'info@example.com' },
        { icon: <BsClockFill className='contact-info-icon' />, title: 'Open Time', description: 'Mon - Friday' },
    ];

    return (
        <Container className='mt-5'>
            <Row>
                {contacts.map((contact, index) => {
                    return <Col key={index} xs='12' md='6' lg='3' data-aos="fade-down">
                        <div className='contact-info-main'>
                            {contact.icon}
                            <h4 className='info-title'>{contact.title}</h4>
                            <p className='detail-text fw-bold'>{contact.description}</p>
                        </div>
                    </Col>
                })}
            </Row>
        </Container>
    )
}

export default AllContacts;
