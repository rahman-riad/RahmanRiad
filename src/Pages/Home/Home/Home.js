import React from 'react';
import Banner from '../Banner/Banner';
import ContactForm from '../ContactForm/ContactForm';
// import ProjectHome from '../ProjectHome/ProjectHome';
import Footer from '../../Shared/Footer/Footer';
import Projects from '../../Projects/Projects/Projects';

const Home = () => {
    return (
        <div>
            <Banner />
            <Projects />
            {/* <ProjectHome /> */}
            <ContactForm />
            <Footer />
        </div>
    );
};

export default Home;