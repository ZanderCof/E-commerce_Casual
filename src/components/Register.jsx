import React from 'react';
import Casual from '../media/Casual.png';

function Register() {
  return (
    <div className="container">
      <input type="checkbox" id="flip" />
      <div className="cover">
        <div className="front">
          <img src={Casual} alt="" />
          <div className="text">
            <span className="text-1">LA TUA ARTE</span>
            <span className="text-2">IL TUO NEGOZIO</span>
          </div>
        </div>
        <div className="back">
          <img className="backImg" src="images/backImg.jpg" alt="" />
          <div className="text">
            <span className="text-1">REGISTRATI E INIZIA A VENDERE SUBITO I TUOI CAPI</span>
            <span className="text-2">CREA IL TUO PERSONALE BREN E SCALE LE CLASSIFICHE </span>
          </div>
        </div>
      </div>
      <div className="forms">
        <div className="form-content">
          <div className="login-form">
            <div className="title">Login</div>
            <form action="#">
              <div className="input-boxes">
                <div className="input-box">
                  <i className="fas fa-envelope"></i>
                  <input type="text" placeholder="Inserisci la Mail" required />
                </div>
                <div className="input-box">
                  <i className="fas fa-lock"></i>
                  <input type="password" placeholder="Inserisci la Password" required />
                </div>
                <div className="text"><a href="#">Password dimenticata?</a></div>
                <div className="button input-box">
                  <input type="submit" value="LOGIN" />
                </div>
                <div className="text sign-up-text">Non hai un account? <label htmlFor="flip">Registrati</label></div>
              </div>
            </form>
          </div>
          <div className="signup-form">
            <div className="title">Registrati</div>
            <form action="#">
              <div className="input-boxes">
                <div className="input-box">
                  <i className="fas fa-user"></i>
                  <input type="text" placeholder="Inserisci il tuo nome" required />
                </div>
                <div className="input-box">
                  <i className="fas fa-envelope"></i>
                  <input type="text" placeholder="Inserisci il tuo cognome" required />
                </div>
                <div className="input-box">
                  <i className="fas fa-lock"></i>
                  <input type="password" placeholder="Inserisci la tua mail" required />
                </div>
                <div className="button input-box">
                  <input type="submit" value="REGISTRATI" />
                </div>
                <div className="text sign-up-text">Hai gia un Account? <label htmlFor="flip">Accedi</label></div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
