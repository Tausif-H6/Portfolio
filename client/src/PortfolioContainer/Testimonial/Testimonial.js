import React from 'react'
import OwlCarousel from 'react-owl-carousel'
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading';
import Animation from '../../utilities/Animation';
import './Testimonial.css';
import lady from '../../../src/img/Testimonial/puja.jpg';
import arnabBhai from '../../../src/img/Testimonial/aa.jpg';
import puja from '../../../src/img/Testimonial/puja1.jpg';
import gs from '../../../src/img/Testimonial/Johana.jpeg';

 





export default function Testimonial(props) {
    let fadeInScreenHandler = (screen) => {
        if (screen.fadeScreen !== props.id)
            return
        Animation.animations.fadeInScreen(props.id)
    }



    const options = {
        loop: true,
        margin: 0,
        nav: true,
        animateIn: "bounceInRight",
        animateOut: "bounceOutRight",
        dots: true,
        autoplay: true,
        smartSpeed: 1000,
        responsive: {
          0: {
            items: 1,
          },
          768: {
            items: 1,
          },
          1000: {
            items: 3,
          },
        },
      };

    return (
        <div>
            <ScreenHeading title={'Testimonial'} subHeading={'What My Client Says About Me'} />

            <section className='testimonial-section' id={props.id || ""}>
                <div className="container">
                    <div className="row">
                        <OwlCarousel className='owl-carousel' id='testimonial-carousel' {...options}>
                            <div className="col-lg-12">
                                <div className="testi-item">
                                    <div className="testi-comment">
                                        <p>
                                        <i className='fa fa-quote-left'/>
                                            I patronized Tausif and when He delivered, I honestly
                                            fell in love with the project He is a very honest guy and
                                            he delivers ontime.
                                            <i className='fa fa-quote-right'/>
                                        </p>
                                        <ul className='stars list-unstyled'>
                                        <li>
                                        <i className='fa fa-star'/>
                                        </li>
                                        <li>
                                        <i className='fa fa-star'/>
                                        </li>
                                        <li>
                                        <i className='fa fa-star-half-alt'/>
                                        </li>
                                        <li>
                                        <i className='fa fa-star'/>
                                        </li>
                                        </ul>
                                    </div>
                                    <div className="client-info">
                                    <img src={lady} alt='problem loading image'></img>
                                    <h5>Sunaira Samara </h5>
                                    <p> Team Manager of GAO TEK inc</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-12">
                            <div className="testi-item">
                                <div className="testi-comment">
                                    <p>
                                    <i className='fa fa-quote-left'/>
                                        Tausif is the most punctual guy I have ever seen.
                                        His friendly attitude make evry task easy.
                                        <i className='fa fa-quote-right'/>
                                    </p>
                                    <ul className='stars list-unstyled'>
                                    <li>
                                    <i className='fa fa-star'/>
                                    </li>
                                    <li>
                                    <i className='fa fa-star'/>
                                    </li>
                                    <li>
                                    <i className='fa fa-star-half-alt'/>
                                    </li>
                                    <li>
                                    <i className='fa fa-star'/>
                                    </li>
                                    </ul>
                                </div>
                                <div className="client-info">
                                <img src={arnabBhai} alt='problem loading image'></img>
                                <h5>Golam Wasi Arnab </h5>
                                <p>  Software Developer  at Bigledger</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-12">
                        <div className="testi-item">
                            <div className="testi-comment">
                                <p>
                                <i className='fa fa-quote-left'/>
                                    I met with a lot of freelancers but he is exceptional from all other guy. 
                                    He lives with a sense of inner elegance.
                                    <i className='fa fa-quote-right'/>
                                </p>
                                <ul className='stars list-unstyled'>
                                <li>
                                <i className='fa fa-star'/>
                                </li>
                                <li>
                                <i className='fa fa-star'/>
                                </li>
                                <li>
                                <i className='fa fa-star-half-alt'/>
                                </li>
                                <li>
                                <i className='fa fa-star'/>
                                </li>
                                </ul>
                            </div>
                            <div className="client-info">
                            <img src={puja} alt='problem loading image'></img>
                            <h5>Puja </h5>
                            <p> HR at Enterprise 360 Ltd. </p>
                            </div>
                        </div>
                    </div>


                     <div className="col-lg-12">
                                <div className="testi-item">
                                    <div className="testi-comment">
                                        <p>
                                        <i className='fa fa-quote-left'/>
                                        Tausif brings all his skills and abilities to the table as a manager.
                                        He is reliable and very goal-oriented, which inspired our team to try our best always.
                                        
                                            <i className='fa fa-quote-right'/>
                                        </p>
                                        <ul className='stars list-unstyled'>
                                        <li>
                                        <i className='fa fa-star'/>
                                        </li>
                                        <li>
                                        <i className='fa fa-star'/>
                                        </li>
                                        <li>
                                        <i className='fa fa-star-half-alt'/>
                                        </li>
                                        <li>
                                        <i className='fa fa-star'/>
                                        </li>
                                        </ul>
                                    </div>
                                    <div className="client-info">
                                    <img src={gs} alt='problem loading image'></img>
                                    <h5>Ts. Dr. Johanna Binti Ahmad  </h5>
                                    <p> Senior Lecturer at UTM</p>
                                    </div>
                                </div>
                            </div>


                        </OwlCarousel>
                    </div>
                </div>
            </section>

        


        </div>
    )
}
