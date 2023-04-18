import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { BiLogIn } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';

import LogoFav from '../../assets/images/favicon.png';
import '../../assets/css/login-form.css';
import TextField from '../../shared/TextField';
import CustomButton from '../../shared/CustomButton';

const LoginForm = () => {

    const navigate = useNavigate();

    const validValues = {
        email: '',
        password: '',
    };

    const errorSchema = Yup.object().shape({
        email: Yup.string().email().required('Email is required'),
        password: Yup.string().required('Password is required')
    });

    const loginHandler = (values) => {
        const data = {
            email: values.email,
            password: values.password
        };
    }

    return (
        <div className='py-5 main-section-container'>
            <Container>
                <Row className='align-items-center justify-content-center'>
                    <Col xs='12' lg='6' data-aos="fade-right">
                        <div className='main-form'>
                            <div className='text-center my-3'>
                                <Image fluid className='fav-logo' src={LogoFav} alt='Logo' loading='lazy' />
                                <h4>Login with your customer account</h4>
                            </div>
                            <Formik
                                initialValues={validValues}
                                validationSchema={errorSchema}
                                onSubmit={loginHandler}
                            >
                                {(formik) => (
                                    <React.Fragment>
                                        <Form className='user-form'>
                                            <TextField label='Email' name='email' type='email' />
                                            <TextField label='Password' name='password' type='password' />
                                            <p className='forget text-end'>Forget Password?</p>
                                            <div className='text-center'>
                                                <CustomButton type='submit'>
                                                    LOGIN <BiLogIn className='ms-2 mb-1 fs-4' />
                                                </CustomButton>
                                            </div>
                                            <p className='mt-3 text-center'>Don't have an account? <span onClick={() => navigate('/register')} className='forget'>Register</span></p>
                                        </Form>
                                    </React.Fragment>
                                )}
                            </Formik>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default LoginForm;
