
import React from 'react'
import Homebody from './Homebody';
const HomeNavbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">

        <div class="container-fluid">
          <button
            class="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i class="fas fa-bars"></i>
          </button>


          <div class="collapse navbar-collapse" id="navbarSupportedContent">

            <a class="navbar-brand mt-2 mt-lg-0" href="#">
              <img
                src="#"
                height="35"
                alt="odop Logo"
                loading="lazy"
              />
            </a>

            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link" href="http://localhost:3000">mart</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="http://localhost:3000/home">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="http://localhost:3000/artistsignup">ArtistSignup</a>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="http://localhost:3000/artistsignin">ArtistSignin</a>
              </li>
              <li class="nav-item">

                <a class="nav-link" href="http://localhost:3000/usersignup">UserSignup</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="http://localhost:3000/usersignin">UserSignin</a>
              </li>
              
            </ul>
          </div>
        </div>
      </nav>
      <Homebody />
    </div>

  )
}

export default HomeNavbar