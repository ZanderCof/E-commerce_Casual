import React, { useState } from 'react';
import Casual from '../media/Casual.png';
import { Link } from 'react-router-dom';

function Navbar(props) {
  const [isLogged, setIsLogged] = useState(false);

  const handleLogout = () => {
    // Aggiungi qui la logica per gestire il logout
    setIsLogged(false);
  };

  return (
    <nav className="navbar navbar-expand-lg" id="nav-body">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img src={Casual} alt="Casual logo" id="logo-nav" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav borderNav">
            <li className="nav-item">
              <Link to="/uomostore" className="nav-link navBtn">
                SHOP
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/donnastore" className="nav-link navBtn">
                CASUAL LEAD
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/bambinistore" className="nav-link navBtn">
                FAQs
              </Link>
            </li>
            {isLogged ? (
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle navBtn"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Nome Utente
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      PROFILO
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      NOTIFICHE
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <button onClick={handleLogout} className="dropdown-item">
                      Logout
                    </button>
                  </li>
                </ul>
              </li>
            ) : (
              <li className="nav-item ml-auto">
                <Link to="/registrati" className="nav-link navBtn">
                  ACCEDI
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
