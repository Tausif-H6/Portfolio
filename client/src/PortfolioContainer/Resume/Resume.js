import React, { useState } from 'react'
import Animation from '../../utilities/Animation'
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading'
import ScrolServices from '../../utilities/ScrollService'
import './Resume.css'



function Resume(props) {

    const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});
  let fadeInScreenHandler= (screen)=>{
    if(screen.fadeScreen !== props.id)
    return
    Animation.animations.fadeInScreen(props.id)
}

const fadeInSubcription= ScrolServices.currentScreenFadeIn.subscribe(fadeInScreenHandler);
  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "-" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>
    );
  };

  const resumeBullets = [
    { label: "Education", logoSrc: "education.svg" },
    { label: "Work History", logoSrc: "work-history.svg" },
    { label: "Programming Skills", logoSrc: "programming-skills.svg" },
    { label: "Projects", logoSrc: "projects.svg" },
    { label: "Interests", logoSrc: "interests.svg" },
  ];

  const programmingSkillsDetails = [
    { skill: "JavaScript", ratingPercentage: 70 },
    { skill: "React JS", ratingPercentage: 65 },
    { skill: "Python", ratingPercentage: 30 },
    { skill: "Express JS", ratingPercentage: 80 },
    { skill: "Node JS", ratingPercentage: 80 },
    { skill: "Mongo Db", ratingPercentage: 70 },
    { skill: "Django Rest", ratingPercentage: 50 },
    { skill: "HTML", ratingPercentage: 80 },
    { skill: "CSS", ratingPercentage: 80 },
  ];
  const projectsDetails = [
    {
      title: "Personal Portfolio Website",
      duration: { fromDate: "2020", toDate: "2021" },
      description:
        "A Personal Portfolio website to showcase all my details and projects at one place.",
      subHeading: "Technologies Used: React JS, Bootsrap",
    },
    {
        title: "E-Notebook",
        duration: { fromDate: "2020", toDate: "2021" },
        description:
          "Here user can save their notes in cloud . ",
        subHeading: "Technologies Used: MERN",
      },
      {
        title: "Text-Utilities",
        duration: { fromDate: "2020", toDate: "2021" },
        description:
          "It has changing mode feature and at the same time user can take the wrods to Uppercase to Lowercase and reverse.",
        subHeading: "Technologies Used: React JS, Bootsrap",
      },
    {
      title: "Samrt E Learning",
      duration: { fromDate: "2020", toDate: "2021" },
      description:
        "The E-learning system designed for the students ,admin and for the teachers.",
      subHeading:
        "Technologies Used:  PHP,HTML,CSS",
    },
    
  ];
  const resumeDetails = [
    <div className="resume-screen-container" key="education">
    <ResumeHeading
        heading={"Universiti Teknologi Malaysia (UTM) Malaysia"}
        subHeading={"BACHELOR OF COMPUTER SCIENCE (Software Engineering)"}
        fromDate={"2018"}
        toDate={"2023"}
    />
    <ResumeHeading
        heading={"Secondary School Certificate "}
        subHeading={"Birshreshtha Munshi Abdur Rouf Public College"}
        fromDate={"2004"}
        toDate={"2015"}
      />
      <ResumeHeading
        heading={"Higher Secondary Certificate "}
        subHeading={"Higher Secondary Certificate"}
        fromDate={"2015"}
        toDate={"2017"}
      />
    </div>,
    <div className="resume-screen-container" key="work-experience">
      <div className="experience-container">
        <ResumeHeading
          heading={"Voxeat"}
          subHeading={"Software Engeener Intern"}
          fromDate={"2022-07-05 "}
          toDate={"2023-02-01"}
        />
        <div className="experience-description">
        <span className="resume-description-text">
           I am a frsh graduate. Before that I did internship at Voxeat.
           Where I have learned about Pyhton,Django,Django REST,Dialogflow. 

          </span>
        </div>
        <div className="experience-description">
          <span className="resume-description-text">
            - Developed an MERN STACK Notebook website for client with the dashboard for
            keeping personal note.
          </span>
          <br />
          <span className="resume-description-text">
            - Integrated the web app with backend services to create new user
            onboarding application with dynamic form content.{" "}
            - Made many more projects with javasprict which will be visible in Github.
          </span>
          <br />
          <span className="resume-description-text">
            - I stretch my mental capacity to develope UI as per the given
            designs.
          </span>
          <br />
        </div>
      </div>
    </div>,
    
    /* PROGRAMMING SKILLS */
    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
      {programmingSkillsDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
          <div className="skill-percentage">
            <div
              style={{ width: skill.ratingPercentage + "%" }}
              className="active-percentage-bar"
            ></div>
          </div>
        </div>
      ))}
    </div>,
    
    /* PROJECTS */
    <div className="resume-screen-container" key="projects">
      {projectsDetails.map((projectsDetails, index) => (
        <ResumeHeading
          key={index}
          heading={projectsDetails.title}
          subHeading={projectsDetails.subHeading}
          description={projectsDetails.description}
          fromDate={projectsDetails.duration.fromDate}
          toDate={projectsDetails.duration.toDate}
        />
      ))}
    </div>,

    /* Interests */
    <div className="resume-screen-container" key="interests">
      <ResumeHeading
        heading="Learning New Technology"
        description="It's been proven that learning new skills also equips people with a developmental mindset, which also improves learning agility (quote research). This will become increasingly important in education and beyond when the workforce will need to adapt new skills as technology evolves."
      />
      <ResumeHeading
        heading="Playing Football"
        description="Personally I play football for both training and fun. ... Additionaly scoring a goal or blocking a dangerous shot is a really nice feeling, what makes football a good game for minimizing the stress. It's good to have an on- field idol, that you can watch to improve your skills."
      />
      <ResumeHeading
        heading="Making New Friends"
        description="Being connected can be very good habits and face to face is important and such people keep in touch with their school mates, college mates and that keeps piling. These friend do have certain common liking or develop them to make a reason to meet at some place."
      />
    </div>,


  ];
  const handleCarousal = (index) => {
    let offsetHeight = 360;

    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };

    setCarousalOffsetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src={require(`../../assets/Resume/${bullet.logoSrc}`)}
          alt="B"
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreens = () => {
    return (
      <div
        style={carousalOffsetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };


  
  return (
    <div className="resume-container screen-container "
    id={props.id || ""} >
    <ScreenHeading title={"Resume"} subHeading={"My formal Bio Details"} />
    <div className="resume-card">
    <div className="resume-bullets">
      <div className="bullet-container">
        <div className="bullet-icons"></div>
        <div className="bullets">{getBullets()}</div>
      </div>
    </div>

    <div className="resume-bullet-details">{getResumeScreens()}</div>
  </div>
    </div>
  )
}

export default Resume
