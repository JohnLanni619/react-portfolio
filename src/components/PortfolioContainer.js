import React, { useState } from 'react';
import NavTabs from './NavTabs';
import About from './pages/About';
import Contact from './pages/Contact';
import Work from './pages/Portfolio';

function Portfolio() {
    // Using useState, set the default value for currentPage to 'Home'
    const [currentPage, handlePageChange] = useState('Home');

    // The renderPage method uses a switch statement to render the appropriate current page
    const renderPage = () => {
        switch (currentPage) {
            case 'About Me':
                return <About/>;
            case 'Contact':
                return <Contact/>;
            case 'Portfolio':
                return <Work/>;
            default:
                return <About/>;
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

