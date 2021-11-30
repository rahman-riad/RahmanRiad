import React from 'react';
import Banner from '../Banner/Banner';
import ContactForm from '../ContactForm/ContactForm';
import ProjectHome from '../ProjectHome/ProjectHome';

const Home = () => {
    return (
        <div>
            <Banner />
            <ProjectHome />
            <ContactForm />
        </div>
    );
};

export default Home;