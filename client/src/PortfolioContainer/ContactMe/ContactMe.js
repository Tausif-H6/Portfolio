import React,{useState} from 'react'
import imgBack from '../../../src/images/mailz.jpeg'
import load1 from "../../../src/images/load2.gif";
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading';
import ScrolServices from '../../utilities/ScrollService';
import Animation from '../../utilities/Animation';
import "./ContactMe.css";
import Typical from 'react-typical';
import axios from "axios";
import { toast } from "react-toastify";



export default function ContactMe(props) {
    let fadeInScreenHandler= (screen)=>{
        if(screen.fadeInScreen !== props.id)
        return
        Animation.animations.fadeInScreen(props.id)
    }

    const fadeInSubcription= ScrolServices.currentScreenFadeIn.subscribe(fadeInScreenHandler);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [banner, setBanner] = useState("");
    const [bool, setBool] = useState(false);

    
  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleMessage = (e) => {
    setMessage(e.target.value);
  };
  



  const submitForm = async (e) => {
    e.preventDefault();
    try {
      let data = {
        name,
        email,
        message,
      };
      setBool(true);
      const res = await axios.post('/contact', data);
      if (name.length === 0 || email.length === 0 || message.length === 0) {
        setBanner(res.data.msg);
        toast.error(res.data.msg);
        setBool(false);
      } else if (res.status === 200) {
        setBanner(res.data.msg);
        toast.success(res.data.msg);
        setBool(false);

        setName("");
        setEmail("");
        setMessage("");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='main-container' id={props.id||""}>
    <ScreenHeading subHeading={"Let's keep in Tpuch"} title={"Contact Me"}/>
    <div className="central-form">
    <div className="col">
    <h2 className='title'>
    <Typical
      loop={Infinity}
      wrapper="p"
      steps={[

        "Get In Touch  ????",
        1000,
        "Assalamualaikum .",
        1000,
        "Email me by filling the form  .",
        1000,
        
        
      ]
    }
    />
  </h2>

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
    <div className="back-form">
    <div className="img-back">
    <h4>Send your Email Here!</h4>
    <img src={imgBack} alt="Image not found" />
    </div>
    <form  onSubmit={submitForm}>
    <p>{banner}</p>
    <label htmlFor="name">Name</label>
    <input type="text" onChange={handleName} value={name}/>
    <label htmlFor="email">Email</label>
    <input type="text" onChange={handleEmail} value={email}/>
    <label htmlFor="message" >Message</label>
    <textarea type="text"  onChange={handleMessage} value={message}/>
    <div className="send-btn">
    <button type="submit">
                send
                <i className="fa fa-paper-plane" />
                {bool ? (
                  <b className="load">
                    <img src={load1} alt="image not responding" />
                  </b>
                ) : (
                  ""
                )}
              </button>
    </div>
    </form>
    </div>
    </div>
    </div>
  )
}
