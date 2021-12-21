import React, {useContext} from 'react';
import {AppContext} from "../App";
import Login from "./Login";

const Private = () => {
    const {isAuth, torts} = useContext(AppContext)

    if (!isAuth) {
        return (
            <Login />
        )
    }

    const tortId = localStorage.getItem('tortId')
    const name = localStorage.getItem('name')
    const phone = localStorage.getItem('phone')

    if (tortId && name && phone) {
        const tort = torts.find(tort => tort.id === Number(tortId))
        return (
            <div>
                <h2>Administrator</h2>
                <div>
                    <h3>{name}</h3>
                    <p>{phone}</p>
                    <span>{tort.title}</span>
                </div>
            </div>
        );
    }

    return (
        <div>
            <h2>Top Secret</h2>
            <div>
                Нет заявок
            </div>
        </div>
    )


};

export default Private;
