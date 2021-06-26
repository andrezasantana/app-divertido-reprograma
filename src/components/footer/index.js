import React from 'react';
import ImgBio from '../../assets/perfil-andreza.jpg'
import './style.css'

const Footer = () => {
    return (
        <div className="footer">
            <div>
                <a className="redes" href="https://www.linkedin.com/in/andreza-santana-7a4009a2/" target="_blank" rel="noreferrer">Linkedin</a>
                <a className="redes" href="https://github.com/andrezasantana" target="_blank" rel="noreferrer">GitHub</a>
            </div>
            <div className="bio">
                <img className="imagem-bio" src={ImgBio} alt="" />
                <ul className="lista-bio">
                    <li>Andreza Santana</li>
                    <li>Desenvolvedora Front-end</li>
                    <li>Reprograma</li>
                </ul>
            </div>
        </div>
    )
}

export default Footer;
