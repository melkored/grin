import React from 'react'
import imageGal1 from "../images/made-in-mexico.jpg";
import imageGal2 from "../images/grin-1.jpg";
import imageGal3 from "../images/grin-2.jpg";
import imageGal4 from "../images/grin-3.jpg";
import './style/images.css'

const Images = () => (
    <div className="images" id={"grid-images"}>
        <div className={"images1"}>
            <img src={imageGal1} alt=""/>
        </div>
        <div className={"images2"}>
            <img src={imageGal2} alt=""/>
        </div>
        <div className={"images3"}>
            <img src={imageGal3} alt=""/>
        </div>
        <div className={"images4"}>
            <img src={imageGal4} alt=""/>
        </div>
    </div>
)

export default Images