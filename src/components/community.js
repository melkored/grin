import React from 'react'
import apple from "../images/appstore.png";
import android from "../images/googleplay.png";
import { grinLandscapeUrl } from "../images/grin-landscape-url";
import  './style/community.css'

const Community = () => (
    <div className="community" id={"grid-community"}>
        <div className={"community-text"}>
            <h2 className={"general-title"}>Nuestra Comunidad</h2>
            <p className={"general-text"}>Para nosotros no hay nada más importante que nuestra comunidad.
                <br/>
                <br/>
                Creemos que la unión hace la fuerza, es por eso que buscamos que nuestra comunidad crezca y se mantenga unida mediante eventos y una comunicación constante.
            </p>
            <div className={"download-images-div"}>
                <a href="https://itunes.apple.com/mx/app/grin-scooters/id1411088480?mt=8" target={"_blank"}>
                    <img src={apple} alt=""/>
                </a>
                <a href="https://play.google.com/store/apps/details?id=com.grin" target={"_blank"}>
                    <img src={android} alt=""/>
                </a>
            </div>
        </div>
        <div className={"community-image"}>
            <img src={ grinLandscapeUrl } alt=""/>
        </div>
    </div>
)

export default Community