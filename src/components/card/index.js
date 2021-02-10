import React from 'react';
import "./styles.css";

export default function Card({data}) {
    return (
        <div className="card-container">
            <h3>
               <img href = {data.image} width ="200px" height = "200px"/>
            </h3>
            <h3>
               <strong>{data.name}</strong>
            </h3>
            <h3>
                <strong>Preço: </strong>{data.price}
            </h3>
            <button className = "login2">Adicionar ao carrinho</button>
        </div>
    );
}