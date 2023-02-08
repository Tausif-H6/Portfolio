import React from 'react'
import Typical from 'react-typical'

import './Profile.css'
import ScrolServices from '../../../utilities/ScrollService'

export default function Profile() {
    return (
        <>
        <div className="profile-container">
        <div className="profile-parent">
          <div className="profile-details">
            <div className="colz">
              <div className="colz-icon">
                <a href="https://www.facebook.com/tsf888/">
                  <i className="fa fa-facebook-square" />
                </a>
                <a href="#">
                  <i className="fa fa-google-plus-square" />
                </a>
                <a href="https://www.instagram.com/hossain_tausif/?hl=en">
                  <i className="fa fa-instagram" />
                </a>
                <a href="https://www.youtube.com/channel/UCgnGheT_yaoYMXm18jY7BjQ">
                  <i className="fa fa-youtube-square" />
                </a>
                <a href="https://twitter.com/tsf_tousif">
                  <i className="fa fa-twitter" />
                </a>
              </div>
            </div>
            <div className="profile-details-name">
              <span className="primary-text">
                {" "}
                Hello, I'M <span className="highlighted-text">Tausif</span>
              </span>
            </div>
            <div className="profile-details-role">
              <span className="primary-text">
                {" "}
                <h1>
                  <Typical
                    loop={Infinity}
                    steps={[
                      "Enthusiastic about MERN STACK 😎",
                      1000,
                      "Wanted to be a Full stack Developer 💻",
                      1000,
                      "Have Efficient Knowledge of Python & Django 🐍 ",
                      1000,
                      "Have experince with Django REST Framework 💻",
                      1000,
                      "Love to play with API's 🌐",
                      1000,
                    ]}
                  />
                </h1>
              </span>
              <span className="profile-role-tagline">
              Belive in Allah rest leave it to him.
              </span>
            </div>
  
            <div className="profile-options">
              <button className="btn primary-btn"
              onClick={() => ScrolServices.scrollHandler.scrollToHireMe()}
              > Hire Me </button>
              <a href="Tausif web.pdf" download="Tausif cv.pdf">
                <button className="btn highlighted-btn">Get Resume</button>
              </a>
            </div>
          </div>
          <div className="profile-picture">
            <div className="profile-picture-background"></div>
          </div>
        </div>
      </div>
        </>
    )
}
