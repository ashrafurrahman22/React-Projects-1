import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="name navbar-brand" href="#">React Project-1</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">| Home |</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">| Features |</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">| Pricing |</a>
        </li>
        <li className="nav-item">
          <a className="nav-link">| Contact |</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
        </div>
    );
};

export default Header;