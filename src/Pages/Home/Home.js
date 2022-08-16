import React from 'react';
import Banner from './Banner';
import FounderMessage from './FounderMessage/FounderMessage';
import GroupCompany from './GroupCompany';
import Mission from './Mission';
import Responsibility from './Responsibility';
import Services from './Services/Services';
import Vision from './Vision/Vision';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Vision></Vision>
            <Mission></Mission>
            <Responsibility></Responsibility>
            <FounderMessage></FounderMessage>
            <GroupCompany></GroupCompany>
        </div>
    );
};

export default Home;