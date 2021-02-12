import React from 'react';
import "./styles.css";
import {BiUserCircle} from "react-icons/bi" ;
import {Link} from "react-router-dom";

export default function Header() {
    return (
        <div id="container">
           
           <div id = "brand-image2">
            </div>
            <div className="header-container">
                <Link to ="./QuemSomos" style = {{textDecoration:"none"}}><button>Quem somos</button></Link>
                <Link to ="./" style = {{textDecoration:"none"}}><button>Produtos</button></Link>
                <Link to ="./meucarrinho" style = {{textDecoration:"none"}}><button>Meu carrinho</button></Link>
                <Link to ="./faleconosco" style = {{textDecoration:"none"}}><button>Fale conosco</button></Link>
            </div>    
            <div id = "user-container">
                <Link to ="./Login" style = {{textDecoration:"none"}}><button><h4>Login</h4></button></Link>
                <Link to ="./perfil" style = {{textDecoration:"none"}}><button><h4><BiUserCircle id = "user-image"/></h4></button></Link>
            </div>
            
        
        </div>
    );
}