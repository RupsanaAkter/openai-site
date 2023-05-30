import React from 'react';
import Article from '../Article/Article';
import Header from '../Header/Header';
import Brand from '../Brand/Brand';

const Home = () => {
    return (
        <div className="App">
           <div className="gradient__bg">
           <Header></Header>
            <Brand></Brand>
           </div>
            <Article></Article>
        </div>
    );
};

export default Home;