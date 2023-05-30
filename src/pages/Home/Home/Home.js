import React from 'react';
import Article from '../Article/Article';
import Header from '../Header/Header';
import Brand from '../Brand/Brand';
import Whatgpt from '../Whatgpt3/Whatgpt';
import Features from '../Features/Features';
import Posibility from '../Possibility/Posibility';
import Cta from '../Cta/Cta';
import Blog from '../Blog/Blog';

const Home = () => {
    return (
        <div className="App">
           <div className="gradient__bg">
           <Header></Header>
            <Brand></Brand>
           </div>
           <Whatgpt></Whatgpt>
           <Features></Features>
           <Posibility></Posibility>
           <Cta></Cta>
            <Blog></Blog>
        </div>
    );
};

export default Home;