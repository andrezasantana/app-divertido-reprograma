import React from 'react'
import { link } from 'react-router-dom'
import './style.css'

const Menu = () => {
    return (
        <div>
            <ul className="menu">
                <li><link className="link" to="/">Home</link></li>
                <li><link className="link" to="/simpsons">Simpsons</link></li>
            </ul>
        </div>
    )
}

export default Menu