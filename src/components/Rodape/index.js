import React from 'react';
import "./styles.css";
import {FaFacebookSquare, FaInstagramSquare} from "react-icons/fa";
import {FaWhatsappSquare} from "react-icons/fa";

export default function Rodape() {
    return (
        <div className="container2">
            <div className = "sub-container">
                <h1>Endereço</h1>
                <p>
                    Central de Vendas - SP<br></br>
                    Rua Possidônio Ignacio, 87<br></br>
                    Zona Cerealista - São Paulo<br></br>
                    CEP: 01103-030  <br></br>
                    Tel: (11) 3311-4250<br></br>
                </p>
            </div>

            <div className = "sub-container">
                <h1>Horário de funcionamento</h1>
                <p>
                    Atendemos de segunda a sábado.<br></br>
                    Seg – Sex: 8 hs às 17 hs<br></br>
                    Sábado: 8 hs às 11 hs<br></br>
                </p>
            </div>   
            <div className = "sub-container">
                <h1>Redes sociais</h1>
                <div className = "social"><FaFacebookSquare className = "social-foto"/> <h5> brandfacebook</h5></div>
                <div className = "social"><FaInstagramSquare className = "social-foto"/> <h5> @brandinstagram</h5></div>
                <div className = "social"> <FaWhatsappSquare className = "social-foto"/> <h5> whatsapplink</h5></div>
                
            </div>
        </div>    
              
        
    );
}
