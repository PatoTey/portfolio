import React from "react";
import logogit from "../images/github-mark-white.png"
import logolkdin from "../images/LI-In-Bug.png"

export default function Content(){
    return (
        <div className="intro">
            <h1 className="nameTitle">Patricio Tudela</h1>
            <h2 className="subtitle">Front-End Developer</h2>
            <div className="socialslinks">
                <a href="https://github.com/PatoTey" target="_blank" rel="noreferrer" className="srclink">
                    <img className="sociallink" src={logogit} alt="a programing cat"/>
                </a>
                <a href="https://www.linkedin.com/in/patricio-tudela-chavera/" target="_blank" rel="noreferrer" className="srclink">
                    <img className="sociallink" src={logolkdin} alt="initials of linkedin"/>
                </a>
            </div>
        </div>
    )
}