import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faUniversity } from "@fortawesome/free-solid-svg-icons";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import { faBirthdayCake } from "@fortawesome/free-solid-svg-icons";
import { faFileText } from "@fortawesome/free-solid-svg-icons";
import { faNewspaper } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";

import { faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { faNoteSticky } from "@fortawesome/free-solid-svg-icons";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";

import { faComment } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faImage } from "@fortawesome/free-solid-svg-icons";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

import windomWall from '../images/download1.jfif';
import Header from "../components/Header";

function clickme(){
  alert('Bonjour!!!');
}

class Home extends React.Component {
    render(){
        return(
        <>
          <Header/> 
            <div className="main-container">

              <aside className="sidebar">
                <a className="active" href="../Home"><FontAwesomeIcon icon={faHome}/> HOME</a>
                <a href=""><FontAwesomeIcon icon={faUniversity}/>ABOUT THE SCHOOL</a>
                <a href=""><FontAwesomeIcon icon={faPencil}/> APPLICATIONS</a>
                <a href=""><FontAwesomeIcon icon={faBirthdayCake}/> EXHIBITIONS</a>
                <a href="../public"><FontAwesomeIcon icon={faFileText}/>  PUBLICATIONS</a>
                <a href><FontAwesomeIcon icon={faNewspaper}/> NEWS</a>
                <a href="../Event"><FontAwesomeIcon icon={faBell}/>  PUBLIC EVENTS</a>
                <a href=""><FontAwesomeIcon icon={faUser}/> PROFILE</a>
                <a className="anime" onclick="disco()"><i className="fa fa-play-circle" /> DISCO</a>
                <a className="anime" href="../Home"><i className="fa fa-stop" /> NO DISCO</a>
                <button className="animation">Start Animation</button>
                <button className="btn1">Slide up</button>
                <button className="btn2">Slide down</button>
                <button onClick={clickme}>Hello in French</button>
              </aside>

              <div className="menu-mobile">
                <a href><FontAwesomeIcon icon={faArrowAltCircleLeft}/></a>
                <a href><FontAwesomeIcon icon={faNoteSticky}/></a>
                <a href><FontAwesomeIcon icon={faHeart}/></a>
                <a href><FontAwesomeIcon icon={faCalendar}/></a>
              </div>
            
              <main className="content">
                <div className="column">
                  <div className="scrollpost">
                      <form action="/action_page.php">
                        <textarea id="post" placeholder="Write here..." onfocus="myPost()" onblur="myPost()" defaultValue={""} />
                          <br />
                          <button className="icon"><FontAwesomeIcon icon={faPaperPlane}/></button>
                          <button className="icon"><FontAwesomeIcon icon={faImage}/></button>   
                      </form>

                      <div className="scrollpost-post">
                        <p>orem ipsum dolor sit amet, consectetur adipiscing elit. Proin imperdiet 
                          fringilla ante auctor iaculis. Donec tempor massa eget sapien scelerisque, 
                          non mattis est tincidunt. Nam commodo diam et consectetur varius. Donec nec quam euismod, 
                          fringilla neque at, ullamcorper erat. Nulla dictum tincidunt eros, pulvinar elementum mauris 
                          condimentum ac. Nulla ultricies commodo ligula, ac suscipit purus pharetra a. Nunc at turpis et risus 
                          pellentesque fermentum id a tortor. In hac habitasse platea dictumst. Fusce vel tortor aliquet,
                          blandit nisi blandit, vestibulum dolor.
                        </p>
                        <img className="img-post" src= {windomWall} alt="windowwallpaper" />
                        <button className="icon-post"><FontAwesomeIcon icon={faHeart}/></button>
                        <button className="icon-post"><FontAwesomeIcon icon={faComment}/></button>  
                        <button className="icon-editor">Editor</button> 
                      </div>
                    
                      <div className="scrollpost-post">
                        <p>orem ipsum dolor sit amet, consectetur adipiscing elit. Proin imperdiet 
                          fringilla ante auctor iaculis. Donec tempor massa eget sapien scelerisque, 
                          non mattis est tincidunt. Nam commodo diam et consectetur varius. Donec nec quam euismod, 
                          fringilla neque at, ullamcorper erat. Nulla dictum tincidunt eros, pulvinar elementum mauris 
                          condimentum ac. Nulla ultricies commodo ligula, ac suscipit purus pharetra a. Nunc at turpis et risus 
                          pellentesque fermentum id a tortor. In hac habitasse platea dictumst. Fusce vel tortor aliquet,
                          blandit nisi blandit, vestibulum dolor.
                        </p>
                        <iframe width="100%" height={315} src="https://www.youtube.com/embed/ElWG0_kjy_Y" />
                        <button className="icon-post"><FontAwesomeIcon icon={faHeart}/></button>
                        <button className="icon-post"><FontAwesomeIcon icon={faComment}/></button>  
                        <button className="icon-editor">Editor</button> 
                      </div>

                      <div className="scrollpost-post">
                        <p>orem ipsum dolor sit amet, consectetur adipiscing elit. Proin imperdiet 
                          fringilla ante auctor iaculis. Donec tempor massa eget sapien scelerisque, 
                          non mattis est tincidunt. Nam commodo diam et consectetur varius. Donec nec quam euismod, 
                          fringilla neque at, ullamcorper erat. Nulla dictum tincidunt eros, pulvinar elementum mauris 
                          condimentum ac. Nulla ultricies commodo ligula, ac suscipit purus pharetra a. Nunc at turpis et risus 
                          pellentesque fermentum id a tortor. In hac habitasse platea dictumst. Fusce vel tortor aliquet,
                          blandit nisi blandit, vestibulum dolor.
                        </p>
                        <iframe width="100%" height={315} src="https://www.youtube.com/embed/wk9L1N9bRRE" />
                        <button className="icon-post"><FontAwesomeIcon icon={faHeart}/></button>
                        <button className="icon-post"><FontAwesomeIcon icon={faComment}/></button>  
                        <button className="icon-editor">Editor</button> 
                      </div>

                      <div className="slideshow-container">
                        <div className="mySlides fade">
                          <div className="numbertext">1 / 3</div>
                          <img width="100%" height={315} src="" />
                        </div>
                        <div className="mySlides fade">
                          <div className="numbertext">2 / 3</div>
                          <img width="100%" height={315} src="" />
                        </div>
                        <div className="mySlides fade">
                          <div className="numbertext">3 / 3</div>
                          <img width="100%" height={315} src="" />
                        </div>
                        <a className="prev" onclick="plusSlides(-1)">❮</a>
                        <a className="next" onclick="plusSlides(1)">❯</a>
                      </div>

                      <br />

                      <div style={{textAlign: 'center'}}>
                        <span className="dot" onclick="currentSlide(1)" /> 
                        <span className="dot" onclick="currentSlide(2)" /> 
                        <span className="dot" onclick="currentSlide(3)" /> 
                      </div>

                    </div>
                      <div className="scrollpost-right"><header className="sideheader">Trend for You</header>
                        <p>orem ipsum dolor sit amet, consectetur adipiscing elit. Proin imperdiet 
                          fringilla ante auctor iaculis. Donec tempor massa eget sapien scelerisque, 
                          non mattis est tincidunt. Nam commodo diam et consectetur varius. Donec nec quam euismod, 
                          fringilla neque at, ullamcorper erat. Nulla dictum tincidunt eros, pulvinar elementum mauris 
                          condimentum ac. Nulla ultricies commodo ligula, ac suscipit purus pharetra a. Nunc at turpis et risus 
                          pellentesque fermentum id a tortor. In hac habitasse platea dictumst. Fusce vel tortor aliquet,
                        </p>
                      </div>
                      <div className="scrollpost-right"><header className="sideheader">About this website</header>
                        <p>This website exists as an ongoing collaborative experiment in digital publishing and information sharing.
                          Because this website functions as a wiki, all members of the School of Art community—graduate students, faculty, staff,
                          and alums—have the ability to add new content and pages, and to edit most of the site’s existing content.
                          Content is the property of its various authors. When you contribute to this site, you agree to abide by Yale University
                          academic and network use policy, and to act as a responsible member of our community.
                        </p>
                      </div>
                </div>
              </main>
            </div>
  
        </>
      )
    
    }
}

export default Home;
