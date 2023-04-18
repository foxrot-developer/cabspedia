import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { FaTaxi } from 'react-icons/fa';
import { BsPersonFillCheck, BsFillHandbagFill } from 'react-icons/bs';
import { MdLuggage } from 'react-icons/md';

import CabImg from '../../assets/images/cabs.png';
import SaloonImg from '../../assets/images/saloon.png';
import ExecutiveImg from '../../assets/images/executive.png';
import EstateImg from '../../assets/images/estate.png';
import MPVImg from '../../assets/images/mpv.png';
import SeaterImg from '../../assets/images/seater.png';
import '../../assets/css/taxis.css';

const Taxis = () => {

    const cabs = [
        {
            img: SaloonImg,
            name: 'Saloon',
            specs: [
                { icon: <BsPersonFillCheck className='cab-icon' />, name: 'Passengers', value: 4 },
                { icon: <MdLuggage className='cab-icon' />, name: 'Luggage', value: 2 },
                { icon: <BsFillHandbagFill className='cab-icon' />, name: 'Bags', value: 2 },
            ]
        },
        {
            img: ExecutiveImg,
            name: 'Executive',
            specs: [
                { icon: <BsPersonFillCheck className='cab-icon' />, name: 'Passengers', value: 4 },
                { icon: <MdLuggage className='cab-icon' />, name: 'Luggage', value: 4 },
                { icon: <BsFillHandbagFill className='cab-icon' />, name: 'Bags', value: 3 },
            ]
        },
        {
            img: EstateImg,
            name: 'Estate',
            specs: [
                { icon: <BsPersonFillCheck className='cab-icon' />, name: 'Passengers', value: 4 },
                { icon: <MdLuggage className='cab-icon' />, name: 'Luggage', value: 2 },
                { icon: <BsFillHandbagFill className='cab-icon' />, name: 'Bags', value: 3 },
            ]
        },
        {
            img: MPVImg,
            name: 'MPV+',
            specs: [
                { icon: <BsPersonFillCheck className='cab-icon' />, name: 'Passengers', value: 6 },
                { icon: <MdLuggage className='cab-icon' />, name: 'Luggage', value: 5 },
                { icon: <BsFillHandbagFill className='cab-icon' />, name: 'Bags', value: 3 },
            ]
        },
        {
            img: SeaterImg,
            name: '8 Seater',
            specs: [
                { icon: <BsPersonFillCheck className='cab-icon' />, name: 'Passengers', value: 7 },
                { icon: <MdLuggage className='cab-icon' />, name: 'Luggage', value: 8 },
                { icon: <BsFillHandbagFill className='cab-icon' />, name: 'Bags', value: 4 },
            ]
        }
    ];

    return (
        <Container className='mt-5'>
            <div className='text-center'>
                <h3 className='left-small-heading'>OUR CABS</h3>
                <h2 className='left-big-heading'>Our <span className='special-heading'>Availlable</span> Cabs</h2>
                <div className='heading-divider'></div>
            </div>

            <Row>
                {cabs.map((cab, index) => {
                    return <Col key={index} xs='12' md='6' lg='3' data-aos="fade-up">
                        <div className='main-card m-2'>
                            <div className='text-center'>
                                <Image fluid src={cab.img} alt="Cab" loading="lazy" height={300} />
                            </div>
                            <h3 className='cab-name'>{cab.name}</h3>
                            <div className='heading-divider'></div>
                            {cab.specs.map((spec, specIndx) => {
                                return <div key={specIndx} className='d-flex align-items-center justify-content-between my-2'>
                                    <div className='d-flex align-items-center justify-content-start'>
                                        {spec.icon}
                                    </div>
                                    <p className='p-0 m-0 detail-text'>{spec.value}</p>
                                </div>
                            })}
                        </div>
                    </Col>
                })}
            </Row>
        </Container>
    )
}

export default Taxis;
