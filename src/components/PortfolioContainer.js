import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Work from './pages/Work';

function Portfolio() {
    // Using useState, set the default value for currentPage to 'Home'
    const [currentPage, handlePageChange] = useState('Home');

    // The renderPage method uses a switch statement to render the appropriate current page
    const renderPage = () => {
        switch (currentPage) {
            case 'About':
                return <About/>;
            case 'Contact':
                return <Contact/>;
            case 'Work':
                return <Work/>;
            default:
                return <Home/>;
        }
    };

    return (
        <div>
            {/* Pass the state value and the setter as props to NavTabs */}
            <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
            {/* Call the renderPage function */}
            <div>{renderPage()}</div>
        </div>
    );
}

export default Portfolio;

