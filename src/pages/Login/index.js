import React from 'react';
import "./styles.css";
import {FaHatCowboy} from "react-icons/fa";
import Header from "../../components/Header/index"
import Rodape from "../../components/Rodape/index"
import {Link} from "react-router-dom"
export default function Login() {
    return (
    
      <div id = "body"> 
                <div><Header/></div>
            <div id ="div">
              
                    <form>
                        <div id = "brand-image">
                        </div>
                        <h2>Login</h2>
                        <input  id = "username"  placeholder= "email, nome de usuário ou telefone" />
                        <input type = "password" id = "password"  placeholder="senha" />
                        <p><Link to = "/recuperarsenha" style = {{textDecoration: "none"}}><div id ="a"> Esqueci minha senha</div></Link></p>
                        <input type="submit" value="Entrar" class="login"/>
                    <p> Ainda não possui cadastro? <Link to = "/Signin" style = {{textDecoration: "none"}}><div id ="a"> Cadastrar</div></Link></p>

                    </form>
                
            </div>     
                <Rodape/>
        </div>
       

        
    );
}
