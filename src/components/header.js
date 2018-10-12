import React from 'react'
import apple from "../images/appstore.png";
import android from "../images/googleplay.png";
import { grinLandscapeUrl } from "../images/grin-landscape-url";
import './style/header.css'

const Header = () => (
    <div className="header" id={"grid-header"}>
        <div className={"header-text"}>
            <h3 className={"header-title"}>Muévete diferente y disfruta el viaje</h3>
            <h4 className={"download-app-text"}>¡Descarga la App!</h4>
            <div className={"download-images-div"}>
                <a href="https://itunes.apple.com/mx/app/grin-scooters/id1411088480?mt=8" target={"_blank"}>
                    <img src={apple} alt=""/>
                </a>
                <a href="https://play.google.com/store/apps/details?id=com.grin" target={"_blank"}>
                    <img src={android} alt=""/>
                </a>
            </div>
        </div>
        <div className={"header-image"}>
            <img src={grinLandscapeUrl} alt=""/>
        </div>
    </div>
)

export default Header
