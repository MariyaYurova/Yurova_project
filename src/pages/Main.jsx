import React, {useContext, useEffect, useState} from 'react';
import Card from "../components/Card/Card";
import {AppContext} from "../App";

const Main = () => {
    const {torts} = useContext(AppContext)

    if (!torts.length) {
        return  (
            <div>...Loading</div>
        )
    }
    return (
        <div className="page">
            <h1 className="page__title">Торты</h1>
            <ul className="page__cardbox">
            {torts.map((card) => {
                return (
                    <Card key={card.id} card={card}/>
                )
            })}
        </ul>
        </div>
    );
};

export default Main;
