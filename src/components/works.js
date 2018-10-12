import React from 'react'
import encuentra from "../images/01.png";
import desbloquea from "../images/02.png";
import muevete from "../images/03.png";
import './style/works.css'

const Works = () => (
    <div className="works" id={"grid-works"}>
        <div className={"works-text"}>
            <h2 className={"general-title"}>
                ¿Cómo funciona?
            </h2>
            <p className={"general-text"}>
                Somos una comunidad de movilidad diferente. Conectamos persona de Manera simple, divertida y ecológica.
                <br/>
                <br/>
                Podrás utilizar nuestros patines electricos a partir de $15 y circular libremente en la CDMX.
                ¿Dile hola a los nuevos vehiculos recreativos de a ciudad!
            </p>
        </div>
        <div className={"works-content-div"}>
            <div className={"description-container"}>
                <div className={"description-image-container"}>
                    <img src={encuentra} alt=""/>
                </div>
                <div className={"works-description"}>
                    <h3 className={"inner-title"}>Encuentra</h3>
                    <p className={"inner-text"}>Utiliza nuestra app para encontrar un Grin cerca de donde estás.</p>
                </div>
            </div>
            <div className={"description-container"}>
                <div className={"description-image-container"}>
                    <img src={desbloquea} alt=""/>
                </div>
                <div className={"works-description"}>
                    <h3 className={"inner-title"}>Desbloquea</h3>
                    <p className={"inner-text"}>Escanéa el código, sube al patín e impulsate para iniciar tu viaje.</p>
                </div>
            </div>
            <div className={"description-container"}>
                <div className={"description-image-container"}>
                    <img src={muevete} alt=""/>
                </div>
                <div className={"works-description"}>
                    <h3 className={"inner-title"}>Muévete</h3>
                    <p className={"inner-text"}>Circula por la ciclovias donde estén disponibles.</p>
                </div>
            </div>
        </div>
    </div>
)

export default Works