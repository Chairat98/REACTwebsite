import React from "react";

import Header from "../components/Header";

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


import windomWall from '../images/download1.jfif';

function clickme(){
  alert('Hej!!!');
}

class Event extends React.Component{

    render(){

  
        return(

          <>

          <Header/>
            <div className="main-container">
            <aside className="sidebar">
              <a  href="../Home"><FontAwesomeIcon icon={faHome}/> HOME</a>
              <a href><FontAwesomeIcon icon={faUniversity}/>ABOUT THE SCHOOL</a>
              <a href=""><FontAwesomeIcon icon={faPencil}/> APPLICATIONS</a>
              <a href><FontAwesomeIcon icon={faBirthdayCake}/> EXHIBITIONS</a>
              <a href="../public"><FontAwesomeIcon icon={faFileText}/>  PUBLICATIONS</a>
              <a href><FontAwesomeIcon icon={faNewspaper}/>  NEWS</a>
              <a className="active" href="../html/yaleevents.html"><FontAwesomeIcon icon={faBell}/>  PUBLIC EVENTS</a>
              <a href="../html/yalesignup.html"><FontAwesomeIcon icon={faUser}/> PROFILE</a>
              <a className="anime" onclick="disco()"><i className="fa fa-play-circle" /> DISCO</a>
              <a className="anime" href="../html/index.html"><i className="fa fa-stop" /> NO DISCO</a>
              <button className="animation">Start Animation</button>
              <button className="btn1">Slide up</button>
              <button className="btn2">Slide down</button>
              <button onClick={clickme}>Hello in Swedish</button>
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
                  <h1>Public Events</h1>
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
                </div>
                <div className="column2">
                  <div className="pubscrollpost-right"><header className="pubsideheader">Yale SOA land acknowledgement</header>
                    <div className="apply-post">
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet,
                        nulla et dictum interdum, nisi lorem egestas vitae scel<span id="dots">...</span><span id="more">
                          erisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa.
                          Fusce luctus vestibulum augue ut aliquet. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac.
                          In at libero sed nunc venenatis imperdiet sed ornare turpis. Donec vitae dui eget tellus gravida venenatis. Integer fringilla congue eros non fermentum. Sed dapibus pulvinar nibh tempor porta.</span></p>
                      <button onclick="mymoretextFunction()" id="myBtn">Read more</button>
                    </div>
                  </div>
                  <div className="pubscrollpost-right"><header className="pubsideheader">Events of Yale community</header>
                    <div className="apply-post">
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet,
                        nulla et dictum interdum, nisi lorem egestas vitae scel<span id="dots1">...</span><span id="more">
                          erisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa.
                          Fusce luctus vestibulum augue ut aliquet. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac.
                          In at libero sed nunc venenatis imperdiet sed ornare turpis. Donec vitae dui eget tellus gravida venenatis. Integer fringilla congue eros non fermentum. Sed dapibus pulvinar nibh tempor porta.</span></p>
                      <button onclick="mymoretextFunction()" id="myBtn1">Read more</button>
                    </div>
                  </div>
                  <div className="pubscrollpost-right"><header className="pubsideheader">Your schedule</header>
                    <div className="month">      
                      <ul>
                        <li className="prev">❮</li>
                        <li className="next">❯</li>
                        <li>
                          February<br />
                          <span style={{fontSize: '1vw'}}>2023</span>
                        </li>
                      </ul>
                    </div>
                    <ul className="weekdays">
                      <li>Mo</li>
                      <li>Tu</li>
                      <li>We</li>
                      <li>Th</li>
                      <li>Fr</li>
                      <li>Sa</li>
                      <li>Su</li>
                    </ul>
                    <ul className="days">  
                      <li>1</li>
                      <li>2</li>
                      <li>3</li>
                      <li>4</li>
                      <li>5</li>
                      <li>6</li>
                      <li>7</li>
                      <li>8</li>
                      <li>9</li>
                      <li><span className="active">10</span></li>
                      <li>11</li>
                      <li>12</li>
                      <li>13</li>
                      <li>14</li>
                      <li>15</li>
                      <li>16</li>
                      <li>17</li>
                      <li>18</li>
                      <li>19</li>
                      <li>20</li>
                      <li>21</li>
                      <li>22</li>
                      <li>23</li>
                      <li>24</li>
                      <li>25</li>
                      <li>26</li>
                      <li>27</li>
                      <li>28</li>
                      <li>29</li>
                      <li>30</li>
                      <li>31</li>
                    </ul>
                  </div>
                </div>
              </div></main>
          </div>

          </>
        )
    }
}

export default Event;
