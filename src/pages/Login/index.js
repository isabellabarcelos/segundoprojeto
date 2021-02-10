import React from 'react';
import "./styles.css";
import {FaHatCowboy} from "react-icons/fa";
import Header from "../../components/Header/index"
import Rodape from "../../components/Rodape/index"

export default function Login() {
    return (
    
      <div id = "body"> 
            <div><Header/></div>
            <div id = "div">

                <form>
                    <FaHatCowboy id = "img2"/>
                    <h1>BRANDNAME</h1>
                    <h2>Login</h2>
                    <input  id = "username"  placeholder= "email, nome de usuário ou telefone" />
                    <input type = "password" id = "password"  placeholder="senha" />
                    <a>Esqueci minha senha</a>
                    <input type="submit" value="Entrar" class="login"/>

                </form>
            </div>
            <div><Rodape/></div>
             
            
        </div>    
              
        
    );
}
