import React from 'react';
import "./styles.css";
import {BiUserCircle} from "react-icons/bi" ;
import {FaHatCowboy} from "react-icons/fa";

export default function Header() {
    return (
        <div id="container">
           
           <div id = "brand-image">
                <FaHatCowboy id = "image"/>
            </div>
            <div className="header-container">
                <button>Sobre nós</button>
                <button>Produtos</button>
                <button>Meu carrinho</button>
                <button>Fale conosco</button>
            </div>    
            <div id = "user-container">
               <h4>Login</h4> 
               <BiUserCircle id = "user-image"/>
            </div>
            
        
        </div>
    );
}