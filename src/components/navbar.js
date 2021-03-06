import React, { Component } from 'react'
import fbIcon from "../images/fb-icon.png";
import twIcon from "../images/tw-icon.png";
import inIcon from "../images/in-icon.jpg";
import './style/navbar.css'

class Navbar extends Component{
    render(){

        function myFunction() {
            var o = document.getElementById("myTopnav");
            var p = document.getElementById("grid-header");
            var q = document.getElementById("grid-works");
            var r = document.getElementById("grid-images");
            var s = document.getElementById("grid-video");
            var t = document.getElementById("grid-community");
            var u = document.getElementById("grid-grin");
            var v = document.getElementById("grid-footer");
            if (o.className === "topnav") {
                o.className += " responsive";
                // p.className += " not-showing";
                // q.className += " not-showing";
                // r.className += " not-showing";
                // s.className += " not-showing";
                // t.className += " not-showing";
                // u.className += " not-showing";
                // v.className += " not-showing";
            } else {
                o.className = "topnav";
                // p.className += "header";
                // q.className += "works";
                // r.className += "images";
                // s.className += "video";
                // t.className += "community";
                // u.className += "grin";
                // v.className += "footer";
            }
        }

        return(
            <div className="topnav" id="myTopnav">
                <div className={"item"}>
                    <a href="/">
                        <svg className={"navbar-logo"} viewBox="0 0 291.74 227.66" xmlns="http://www.w3.org/2000/svg">
                            <defs className="jsx-3958360775"></defs>
                            <title className="jsx-3958360775">grin</title>
                            <path d="M163.33,16.24c-2.1,7.77-5,14-8.19,17.47A11.68,11.68,0,0,1,147.38,37a26.63,26.63,0,0,1-11.31-2.19L133.8,34c-.58-.2-1.36-.48-2.14-.78-.22-.9-.46-1.8-.74-2.69L113.7,35.72c2.58,8.46,2.33,18.67,2.09,28.54-.05,2.32-.11,4.63-.13,6.88-.15,16.07-.73,28.62-2,43.33L131.58,116c1.32-15.21,1.93-28.17,2.08-44.73,0-2.17.07-4.38.13-6.62.09-3.73.18-7.64.12-11.62A42.21,42.21,0,0,0,146.22,55c.78,0,1.55,0,2.32-.07a29.49,29.49,0,0,0,19.91-9.11c5.21-5.73,9.33-14.1,12.26-24.88Z"></path>
                            <path d="M280,52.71a27.11,27.11,0,0,0-21-9c-8.95.06-21.21,3.66-28.83,20.38-4.45,9.77-6.21,21.45-7.62,30.84-.38,2.53-.74,4.92-1.11,7-1.33,7.39-3.55,19.76-8.39,27.13-2.36,3.59-6,5.88-8.91,5.57-8.55-.9-11.55-4.74-13.06-7.56-9.11-17,6.26-59.28,18.09-81.94l-15.95-8.33c-3.59,6.86-34.53,68-18,98.78,3.66,6.82,11.31,15.29,27,16.95a20.44,20.44,0,0,0,2.35.13c8.87,0,17.89-5.2,23.49-13.72,6.33-9.64,9-22.51,11.06-33.83.42-2.31.8-4.82,1.2-7.48,3.49-23.22,7.52-35.82,18.79-35.91h.12a9.21,9.21,0,0,1,7.4,3.08c10.78,11.94,6.45,51.37,4.61,68.21-.45,4.08-.84,7.61-1,10.28l18,1.24c.15-2.31.52-5.67.95-9.55C292.59,103.83,295,69.25,280,52.71Z"></path>
                            <rect height="18" width="23.11" transform="translate(85.52 187.46) rotate(-56.77)" x="204.66" y="5.6"></rect>
                            <path d="M130.07,152.73c-12.52-7.26-29-5.63-39.13,3.85-5.8,5.43-9.45,11.7-13,17.76-3.86,6.65-7.2,12.38-12.77,16-9.39,6.07-21.4,5.75-29.19-.79-8-6.68-11.57-23.74-4.12-37.66l9.63-15.43c.46,0,.92,0,1.38,0a50.66,50.66,0,0,0,12-1.48c16.91-4.12,30.8-16.12,35.38-30.56A45.65,45.65,0,0,0,91.52,80h0a45.27,45.27,0,0,0-10.71-20L97,46.42,85.47,32.6,66.4,48.52c-13.43-7-29.32-7-42.07.59a50.69,50.69,0,0,0-16,15.6C-4.56,84.14-2.28,109,13.83,125.06a37.6,37.6,0,0,0,9.32,6.78l-6.7,10.74-.27.46a55.29,55.29,0,0,0-6,31.18c1.2,12.05,6.26,22.39,14.26,29.1C38.2,214.89,59,215.76,75,205.43c9.17-5.93,14.15-14.48,18.55-22,3-5.17,5.85-10.05,9.72-13.66,4.36-4.07,12.18-4.7,17.81-1.44,10.29,6,15,24.44,1,50.94l15.91,8.42c7-13.16,10.79-27.19,10.77-39.49C148.66,172.26,142.05,159.67,130.07,152.73ZM23.3,74.64A32.68,32.68,0,0,1,33.56,64.56a23.16,23.16,0,0,1,11.9-3.17,28.08,28.08,0,0,1,18.12,6.84C69.14,73,72.64,78.32,74,84.09A27.83,27.83,0,0,1,73.11,99c-2.68,8.45-11.71,15.89-22.49,18.52-4.56,1.11-16,2.83-24.06-5.19C16.57,102.34,15.23,86.85,23.3,74.64Z"></path>
                        </svg>
                    </a>
                </div>
                <div className={"item item1"}>
                    <a href="/">
                        Zonas Grin
                    </a>
                </div>
                <div className={"item item2"}>
                    <a href="/">Seguridad</a>
                </div>
                <div className={"charger item item3"}>
                    <a href="/">Convertirme en Cargador</a>
                </div>
                <div className={"item item4"}>
                    <a href="/">Carreras</a>
                </div>
                <div className={"item item5"}>
                    <a href="/">Descarga la App</a>
                </div>
                <div className={"item item6"}>
                    <div className={"navbar-image"}>
                        <a href="https://web.facebook.com/grinscooters/?_rdc=1&_rdr" target={"_blank"}>
                            <img src={fbIcon} alt=""/>
                        </a>
                        <a href="https://twitter.com/Grinscooters" target={"_blank"}>
                            <img src={twIcon} alt=""/>
                        </a>
                        <a href="https://www.instagram.com/grinscooters/" target={"_blank"}>
                            <img src={inIcon} alt=""/>
                        </a>
                    </div>
                </div>

                <div className="icon item" onClick={myFunction}>
                    <div className={"ham"}></div>
                    <div className={"ham"}></div>
                    <div className={"ham"}></div>
                </div>
            </div>
        )
    }
}

export default Navbar