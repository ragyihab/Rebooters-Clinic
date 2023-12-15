import React, { useState, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import loginCoverImage from '../styles/carousel-2.jpg';
import "../styles/au.css";

const Conc = () => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Set a delay to trigger the animation after a short period (e.g., 500 milliseconds)
    const timeout = setTimeout(() => {
      setShowContent(true);
    }, 500);

    // Clear the timeout on component unmount
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="site-wrap">
      <div className="login-cover">
        <div className="cover-color">
          <nav className="navbar navbar-expand-lg bg-white navbar-light shadow-sm px-5 py-3 py-lg-0">
            <img src={"clinic-logo.png"} width="100" alt="Clinic Logo" />
            <a href="/" className="navbar-brand p-0">
              <h1 className="m-0 text-primary">
                <i className="fa fa-tooth me-2"></i>El7a2ni
              </h1>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <div className="navbar-nav ms-auto py-0">
                <a href="/" className="nav-item nav-link active">
                  Home
                </a>
                <a href="/about" className="nav-item nav-link">
                  About
                </a>
                <a href="/service" className="nav-item nav-link">
                  Service
                </a>
                <div className="nav-item dropdown">
                  <a
                    href="#"
                    className="nav-link dropdown-toggle"
                    data-bs-toggle="dropdown"
                  >
                    Pages
                  </a>
                  <div className="dropdown-menu m-0">
                    <a href="price.html" className="dropdown-item">
                      Pricing Plan
                    </a>
                    <a href="team.html" className="dropdown-item">
                      Our Dentist
                    </a>
                    <a href="testimonial.html" className="dropdown-item">
                      Testimonial
                    </a>
                    <a href="appointment.html" className="dropdown-item">
                      Appointment
                    </a>
                  </div>
                </div>
                <a href="/contact" className="nav-item nav-link">
                  Contact
                </a>
              </div>
              <button
                type="button"
                className="btn text-dark"
                data-bs-toggle="modal"
                data-bs-target="#searchModal"
              >
                <i className="fa fa-search"></i>
              </button>
              <a href="" className="btn btn-primary py-2 px-4 ms-3">
                Appointment
              </a>
            </div>
          </nav>
          <div className="text-center" style={{ marginLeft: '30px', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: 'white', zIndex: 2 }}>
            <CSSTransition in={showContent} timeout={500} classNames="fade" unmountOnExit>
              <div>
                <h1 style={{ fontSize: '52px'}}>Contact Info</h1>
                <ul className="list-unstyled">
                  <li className="address" style={{ color: '#add8e6' }}>
                  <FontAwesomeIcon icon={faMapMarkerAlt} /> {''} <a
                      href="https://www.google.com/maps?q=GUC,El+Tagamoa+El+Khames,New+Cairo+City,Egypt"
                      target="_blank"
                      rel="noopener noreferrer" style={{ color: '#add8e6' }}
                    >
                      GUC - El Tagamoa El Khames New Cairo City - Egypt
                    </a>                  </li>
                  <li className="phone" >
                    <FontAwesomeIcon icon={faPhone} /> <a href="tel://23923929210" style={{ color: '#add8e6' }}>+1 23456789</a>
                  </li>
                  <li className="email" style={{ color: '#ffffff' }}>
                  <FontAwesomeIcon icon={faEnvelope} /> <a href="mailto:rebootersteam9@gmail.com" style={{ color: '#add8e6' }}>rebootersteam9@gmail.com</a>
                                   </li>
                </ul>
              </div>
            </CSSTransition>
          </div>
          <div className='xy-cover' style={{ backgroundImage: `url(${loginCoverImage})`, backgroundSize: 'cover', height: '100vh', position: 'relative', zIndex: 1 }}>
            {/* Your Background Image */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Conc;
