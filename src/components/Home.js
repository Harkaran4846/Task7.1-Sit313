import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Home.css';

const HomePage = () => {
  const navigateTo = useNavigate();

  return (
    <div className="homepage-container">
      <header className="homepage-header">
        <h1 className="homepage-title">Harkaran @Deakin web</h1>
        <div className="header-row">
          <input className="search-input" type="text" placeholder="search.." />
          <button className="nav-btn" onClick={() => navigateTo('/post')}> Post</button>
          <button className="nav-btn" onClick={() => navigateTo('/login')}> Login</button>
        </div>
      </header>

      <section className="welcome-message">
        <h2>The Harkaran@Deakin web</h2>
      </section>
    </div>
  );
};

export default HomePage;
