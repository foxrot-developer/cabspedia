import React from 'react';

import PageHeader from '../shared/PageHeader';
import AllContacts from '../components/contact-us/AllContacts';
import ContactForm from '../components/contact-us/ContactForm';

const ContactUs = () => {
    return (
        <React.Fragment>
            <PageHeader>CONTACT US</PageHeader>
            <AllContacts />
            <ContactForm />
        </React.Fragment>
    )
}

export default ContactUs;
