import React, {useContext} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {AppContext} from "../App";

const Tort = () => {
    const {torts} = useContext(AppContext)
    let navigate = useNavigate();
    let {id} = useParams();

    const tort = torts.find((item) => item.id === Number(id))

    if (!tort) {
        return (
            <div>
                Торт не найден!
            </div>
        )
    }

    return (
        <div>

            <div className="card">
                <h2>Торт</h2>
                <img className='card__image' alt="tort-name" src={tort.image}/>
                <h2>{tort.title}</h2>
                <p>{tort.description}</p>
                <span>{tort.price}р</span>
                <button onClick={() => navigate(`/send/${id}`)}>Оставить заявку</button>
            </div>
        </div>
    );
};

export default Tort;
