import React from 'react';
import Banner from './Banner';
import Mission from './Mission';
import Services from './Services/Services';
import Vision from './Vision/Vision';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Vision></Vision>
            <Mission></Mission>
        </div>
    );
};

export default Home;