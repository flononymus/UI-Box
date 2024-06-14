import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>UI-Box</h1>
      <p> Welcome to the <strong>UI-Box</strong></p>
      <nav>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </div>
  );
};

export default Home;