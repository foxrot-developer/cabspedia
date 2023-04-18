import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { BsFillSendFill } from 'react-icons/bs';

import ContactImg from '../../assets/images/contact-img.png';
import TextField from '../../shared/TextField';
import CustomButton from '../../shared/CustomButton';
import '../../assets/css/contact-form.css';

const ContactForm = () => {

    const validValues = {
        fullName: '',
        email: '',
        subject: '',
        message: '',
    };

    const errorSchema = Yup.object().shape({
        fullName: Yup.string().required('Full name is required'),
        email: Yup.string().email().required('Email is required'),
        subject: Yup.string().required('Subject is required'),
        message: Yup.string().required('Message is required'),
    });

    const contactHandler = (values) => {
        const data = {
            email: values.email,
            password: values.password
        };
    }

    return (
        <Container className='my-5'>
            <Row>
                <Col xs='12' md='6' className='d-flex align-items-center justify-content-center' data-aos="fade-right">
                    <Image fluid roundedCircle src={ContactImg} alt="Contact" loading='lazy' />
                </Col>
                <Col xs='12' md='6' data-aos="fade-left">
                    <h3 className='left-small-heading'>CONNECT WITH US</h3>
                    <h2 className='left-big-heading'>Get In <span className='special-heading'>Touch</span></h2>
                    <div className='heading-divider'></div>
                    <p className='detail-text'>It is a long established fact that a reader will be distracted by the readable content of a page randomised words slightly when looking at its layout.</p>
                    <div className='message-form'>
                        <Formik
                            initialValues={validValues}
                            validationSchema={errorSchema}
                            onSubmit={contactHandler}
                        >
                            {(formik) => (
                                <React.Fragment>
                                    <Form className='contact-form'>
                                        <TextField label='Name' name='fullName' type='text' />
                                        <TextField label='Email' name='email' type='email' />
                                        <TextField label='Subject' name='subject' type='text' />
                                        <div className="mb-3">
                                            {<label htmlFor='message' className="form-label">Message</label>}
                                            <Field as="textarea" rows='6' className='form-control shadow-none' name="message" />
                                            <ErrorMessage component='small' name='message' className='text-danger fw-bold' />
                                        </div>
                                        <CustomButton type='submit'>
                                            SEND MESSAGE <BsFillSendFill className='ms-2 mb-1' />
                                        </CustomButton>
                                    </Form>
                                </React.Fragment>
                            )}
                        </Formik>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default ContactForm;
