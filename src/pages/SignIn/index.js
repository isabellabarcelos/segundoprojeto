import React from 'react';
import "./styles.css";
import Header from "../../components/Header/index"
import Rodape from "../../components/Rodape/index"


export default function SignIn() {
    return (
     
        <div className = "container-shopping">
           <div>
             <Header/>
           </div>
           <div id ="div2">
                <div>
                    <form>
                        <div id = "brand-image">
                        </div>
                        <h2>Cadastrar</h2>
                        <input  id = "username"  placeholder= "nome" />
                        <input  id = "username"  placeholder= "sobrenome" />
                        <input  id = "username"  placeholder= "email" />
                        <input  id = "username"  placeholder= "telefone" />
                        <input type = "password" id = "username"  placeholder= "senha" />
                        <input type = "password" id = "username"  placeholder= "confirmação de senha" />
                        
                        <input type="submit" value="Cadastrar" class="login"/>
                        

                    </form>
                </div>
            </div>    
            <div id = "footer">
              <Rodape/> 
            </div>     
             
        </div>

    );
}