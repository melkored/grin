import React from 'react'
import fbIcon from "../images/fb-icon.png";
import twIcon from "../images/tw-icon.png";
import inIcon from "../images/in-icon.jpg";
import './style/footer.css'

const Footer = () => (
    <div className="footer" id={"grid-footer"}>
        <div>
            <span className={"social-text"}>Siguenos en nuestras redes sociales</span>
            <div className={"social"}>
                <a href="https://facebook.com/grinscooters/" target={"_blank"}>
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
        <div>
            <a className={"social-text"} href="https://api.ongrin.com/terms/">Términos y condiciones</a>
        </div>
        <div>
            <p className={"social-text"}>© 2018 Grin Scooters SAPI de CV</p>
        </div>
    </div>
)

export default Footer