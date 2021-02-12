import React from 'react';
import "./styles.css";

import {Link} from "react-router-dom"

export default function Card({data}) {

    return (
      <>  
        <Link style = {{ textDecoration: "none", color: "black"}} to = {{
            pathname: "/descricaodoproduto",
            state: {
                    data: data
                },
        }}>
            
            <div className="card-container">
                <h3>
                <img src = {data.picture} alt = {data.name}  width ="200px" height = "200px"/>
                </h3>
                <h3>
                <strong>{data.name}</strong>
                </h3>
                <h3>
                <strong>{data.brand}</strong>
                </h3>
                <h3>
                    <strong>Preço: R$</strong> {data.price}
                </h3>

            </div>
        </Link> 
        <Link style = {{ textDecoration: "none", color: "black"}} to = {{
                  pathname: "/meucarrinho",
                  state: {
                    data: data
                  },
                  }}>
                    <button className = "login3"><strong>Adicionar ao carrinho</strong></button>
        </Link>
            
       </>
    );
}