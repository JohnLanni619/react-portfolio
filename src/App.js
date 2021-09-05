// React needs to be imported in every component file. Any images or CSS you want to use need to be imported at the top as well
import React from 'react';
import Footer from './components/Footer';
import PortfolioContainer from "./components/PortfolioContainer";

const App = () => 
    <section>
        <PortfolioContainer/>
        <Footer/>
    </section>



export default App;
