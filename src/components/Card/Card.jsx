import React from 'react';
import './Card.css'
import {useNavigate} from "react-router-dom";

const Card = ({card}) => {
    const {id, title, image} = card
    let navigate = useNavigate()
    return (
        <div className="card">
            <img className='card__image' alt='tort-name' src={image} width={100}/>
            <h2>{title}</h2>
            <button className="card__button" onClick={() => navigate(`/torts/${id}`)}>Перейти</button>
        </div>
    )
}

export default Card;
