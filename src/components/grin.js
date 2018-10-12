import React from 'react'
import SOMOS from "../images/somos_grin.jpg";
import './style/grin.css'

const Grin = () => (
    <div className="grin" id={"grid-grin"}>
        <div className={"grin-image"}>
            <img src={SOMOS} alt=""/>
        </div>
        <div className={"grin-text"}>
            <h2 className={"general-title"}>#SOMOS GRIN</h2>
            <p className={"general-text"}>
                Nos gusta trabajar de cerca con las ciudades para ayudar a que el transporte sea mejor y más respetuoso con el medio ambiente.
                <br/>
                <br/>
                Hemos empezado con la Ciudad de México y buscamos expandirnos a muchas más ciudades pronto.
                <br/>
                <br/>
                Si eres un funcionario público y te gustaría llevar Grin a tu ciudad, por favor escríbenos a <a
                href="mailto:ciudades@ongrin.com">ciudades@ongrin.com</a> y nuestro equipo se pondrá en contacto contigo.
            </p>
        </div>
    </div>
)

export default Grin