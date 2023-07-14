import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import $ from "jquery";
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

const menu = document.getElementById("menu-btn");
const nav = document.getElementById("nav");

/*menu.addEventListener("click", (e) => {

  if (menu.innerHTML == "Close"){
    menu.innerHTML = "Menu";

  } 
  nav.classList.toggle("visible");
});

nav.addEventListener("click", (e) =>{
  menu.innerHTML = "Menu";
  nav.classList.remove("visible");
}) */

$(document).ready(function(){
  $(".animation").click(function(){
      $("p").fadeTo(1000, 0);
      $("p").fadeTo(1000, 1);
      $("p").fadeTo(1000, 0);
      $("p").fadeTo(1000, 1);
      $("p").fadeTo(1000, 0);
      $("p").fadeTo(1000, 1);

  });
});

$(document).ready(function(){
  $(".btn1").click(function(){
      $("p").slideUp();
  });
  $(".btn2").click(function(){
      $("p").slideDown();
  });
});

/* $( function() {
  $( ".scrollpost-post" ).draggable();
} ); */