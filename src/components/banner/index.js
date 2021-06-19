import React from "react";
import Img from "../../assets/imagem.svg"
import "./style.css"

const Banner = () => {
    return (
        <div className='main'>
            <div>
                <h1>Meu APP divertido</h1>
                <p>Seja bem-vindo ao meu terceiro projeto React para treinar react-router-dom e axios</p>
            </div>
            <img src={Img} alt='Ilustração de uma mulher com varios corações em volta' />
        </div>
    )
}

export default Banner;