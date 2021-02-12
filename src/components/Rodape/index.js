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
                    Central de Vendas - RJ<br></br>
                    Rua Buenos Aires, 338<br></br>
                    Centro - Rio de Janeiro<br></br>
                    CEP: 01103-030  <br></br>
                    Tel: (21) 3311-4250<br></br>
                </p>
            </div>

            <div className = "sub-container">
                <h1>Horário de funcionamento</h1>
                <p>
                    Atendemos de segunda a sábado.<br></br>
                    Seg – Sex: 8 hs às 17 hs<br></br>
              
                </p>
            </div>   
            <div className = "sub-container">
                <h1>Redes sociais</h1>
                <div className = "social"><FaFacebookSquare className = "social-foto"/> <h4> Lactan</h4></div>
                <div className = "social"><FaInstagramSquare className = "social-foto"/> <h4> @Lactan</h4></div>
                <div className = "social"> <FaWhatsappSquare className = "social-foto"/> <h4> (21) 99857-3245</h4></div>
                
            </div>
        </div>    
              
        
    );
}
