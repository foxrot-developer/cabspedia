import React from 'react';

import PageHeader from '../shared/PageHeader';
import LoginForm from '../components/login/LoginForm';

const Login = () => {
    return (
        <React.Fragment>
            <PageHeader>LOGIN</PageHeader>
            <LoginForm />
        </React.Fragment>
    )
}

export default Login;
