import React, { useState, useEffect } from 'react';
import Menu from '../../components/menu';
import gatos from './gatos';
import './style.css';

const Gatos = () => {
    const [busca, setBusca] = useState('')
    const [filtroGatos, setFiltroGatos] = useState([])

    useEffect(() => {
        setFiltroGatos(
            gatos.filter(cat => {
                return cat.name.toLowerCase().includes(busca.toLowerCase())
            })
        )
    }, [busca])

    return (
        <>
            <Menu />
            <div className="text">
                <input onChange={e => { setBusca(e.target.value) }} placeholder="Digite um dia" />
            </div>
            <div className="main-gatos">
                {filtroGatos.map((cat) => {
                    return (
                        <div className="card" key={cat.id}>
                            <h2>{cat.name}</h2>
                            <img src={cat.image} alt="imagem gato" />
                        </div>
                    )
                })}
            </div>
        </>
    )
}
export default Gatos;
