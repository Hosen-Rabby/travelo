import React from 'react';
import Places from '../../Places/Places';
import Navigation from '../../Shared/Navigation/Navigation';
import Banner from '../Banner/Banner';

const HomePage = () => {
    return (
        <div>
           <Navigation/>
           <Banner/>
           <Places/>
        </div>
    );
};

export default HomePage;