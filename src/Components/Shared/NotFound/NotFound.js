import React from 'react';
import Footer from '../Footer/Footer';
import Navigation from '../Header/Navigation/Navigation';

const NotFound = () => {
    return (
        <div>
            <Navigation></Navigation>
            <h1 style={{color: 'red', textAlign: 'center'}}>404!! Page Not Found!! </h1>
            <Footer></Footer>
        </div>
    );
};

export default NotFound;