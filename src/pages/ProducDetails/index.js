import React from 'react';
import "./styles.css";

import Header from "../../components/Header/index"
import Rodape from "../../components/Rodape/index"
import {AiOutlineArrowLeft} from "react-icons/ai"
import {Link, useLocation} from "react-router-dom"



export default function ShoppingList() {
 const {state} = useLocation();
 const data = state.data
 return (    
        <div className = "container-shopping">
          <div>
            <Header/>
          </div>
          <div id = "princ">
            <div className = "title-container-details">
              <Link style = {{color: "#ffcbca"}} to = "/"><AiOutlineArrowLeft className= "arrow"/></Link>
              <h1>Descrição do produto</h1>
            </div>
            
            <section>
              <img src = {data.picture} alt = "product" width ="400px" height = "400px" />
            <div id = "moreinfo-container">
        
              <h3>
                <strong>Nome: </strong> {data.name}
              </h3>
              <h3>
                <strong>Marca:</strong> {data.brand}
              </h3>
              <h3>
                <strong>Descrição:</strong> {data.description}
              </h3>
              <h3>
                  <strong>Preço:</strong> {data.price}
              </h3>
              </div>
              <Link style = {{ textDecoration: "none", color: "black"}} to = {{
                  pathname: "/meucarrinho",
                  state: {
                    data: data
                    
                  },
                  }}>
                    <button className = "login4"><strong>Adicionar ao carrinho</strong></button>
               </Link>
              
            </section>        
          </div>
          <div id = "footer">
            <Rodape/> 
          </div>     
             
        </div> 

    );
}