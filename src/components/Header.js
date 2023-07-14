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

 class Header extends React.Component {
    render(){
        return(
            <header>
            <div className="dropdown">
              <button onclick="myFunction()" className="dropbtn"><i className="fa fa-bars" /></button>
              <div id="myDropdown" className="dropdown-content">
              <a className="active" href="../html/index.html"><FontAwesomeIcon icon={faHome}/> HOME</a>
          <a href><FontAwesomeIcon icon={faUniversity}/>ABOUT THE SCHOOL</a>
          <a href="../html/yaleapply.html"><FontAwesomeIcon icon={faPencil}/> APPLICATIONS</a>
          <a href><FontAwesomeIcon icon={faBirthdayCake}/> EXHIBITIONS</a>
          <a href="../html/yalepublication.html"><FontAwesomeIcon icon={faFileText}/>  PUBLICATIONS</a>
          <a href><FontAwesomeIcon icon={faNewspaper}/>  NEWS</a>
          <a href="../html/yaleevents.html"><FontAwesomeIcon icon={faBell}/>  PUBLIC EVENTS</a>
          <a href="../html/yalesignup.html"><FontAwesomeIcon icon={faUser}/> PROFILE</a>
                <a className="anime" onclick="disco()"><i className="fa fa-play-circle" /> DISCO</a>
                <a className="anime" href="../html/index.html"><i className="fa fa-stop" /> NO DISCO</a>
                <button className="animation">Start Animation</button>
                <button className="btn1">Slide up</button>
                <button className="btn2">Slide down</button>
              </div>
            </div>
            <span className="title">Yale School of Art<i className="fa fa-paint-brush" /></span>
            <button className="icon-search"><i className="fa fa-search" /></button>  
          </header>
        )
    }
 }

 export default Header;