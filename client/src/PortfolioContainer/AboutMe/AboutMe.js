import React from 'react'
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading'
import './AboutMe.css'
export default function AboutMe (props) {
    // let fadeInScreenHandler= (screen)=>{
    //     if(screen.fadeInScreen !== props.id)
    //     return
    //     Animation.animations.fadeInScreen(props.id)
    // }

    const SECREEN_CONST = {
        description : "Student at Universiti Teknologi Malaysia. I am interested in MERN stack development. Previously I worked with the front-end and backend. Now I want to be an expert full-stack developer.",
        highlights:{
            bullets:[
                "Interested in MERN stack development ",
                "Promising Javascript and Python developer",
                "Promising Developer",
                "Bulded REST API with Django and Node js",
                "Made chatbot with Dialog flow",
                "Have Knoledge about C++ , Javascript , Python",

            ],
            heading: "Here are a Few Highlights"
        }
    }

    const renderHighlight=()=>{
        return(
            SECREEN_CONST.highlights.bullets.map((value,i)=>(
                <div className='highlight'  key={i}>
                <div className="highlight-blob"></div>
                <span>{value}</span>
                </div>
            ))
        );
    }
  return (
    <div className='About-me-container  screen-container   ' id={props.id || ""}>

    <div className="about-me-parent">
    <ScreenHeading title={'About Me'} subHeading={'Why Choose ME?'}/>
    <div className="abput-me-card">
    <div className="about-me-profile"></div>
    <div className="about-me-details">
    <span className='about-me-description'>{SECREEN_CONST.description}</span>
    <div className="about-me-highlights">
    <div className="highlight-heading">
    <span>{SECREEN_CONST.highlights.heading}</span>
    </div>
    {renderHighlight()}
    </div>
    <div className="about-me-options">
    
    </div>
    </div>
    </div>
    </div>
    
    </div>
  )
}
