import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';

import '../../assets/css/features.css';
import SafetyImg from '../../assets/images/safety.png';
import PickupImg from '../../assets/images/pickup.png';
import RateImg from '../../assets/images/rate.png';
import SupportImg from '../../assets/images/support.png';

const Features = () => {

    const features = [
        { img: SafetyImg, title: 'Safety Guarantee', detail: 'There are many variations of majority have suffered alteration in some form injected humour randomised words.' },
        { img: PickupImg, title: 'Fast Pickup', detail: 'There are many variations of majority have suffered alteration in some form injected humour randomised words.' },
        { img: RateImg, title: 'Affordable Rate', detail: 'There are many variations of majority have suffered alteration in some form injected humour randomised words.' },
        { img: SupportImg, title: '24/7 Support', detail: 'There are many variations of majority have suffered alteration in some form injected humour randomised words.' },
    ];

    return (
        <div className='mt-5 feature-section w-100'>
            <Container>
                <div className='text-center'>
                    <h3 className='left-small-heading'>FEATURES</h3>
                    <h2 className='left-big-heading text-light'>Our <span className='special-heading'>Awesome</span> Features</h2>
                    <div className='heading-divider'></div>
                </div>

                <Row className='mt-5'>
                    {features.map((feature, index) => {
                        return <Col key={index} xs='12' md='6' lg='3'>
                            <div className='feature-card'>
                                <Image fluid className='feature-icon' src={feature.img} alt="Icon" loading='lazy' />
                                <h3 className='feature-title'>{feature.title}</h3>
                                <p className='detail-text'>{feature.detail}</p>
                            </div>
                        </Col>
                    })}
                </Row>
            </Container>
        </div>
    )
}

export default Features;
