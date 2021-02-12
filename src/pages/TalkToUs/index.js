import React from 'react';
import "./styles.css";
import Header from "../../components/Header/index"
import Rodape from "../../components/Rodape/index"


export default function TalktoUS() {
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
                        <h2>Fale conosco</h2>
                        <input  id = "username"  placeholder= "nome" />
                        <input  id = "username"  placeholder= "sobrenome" />
                        <input  id = "username"  placeholder= "email" />
                        <input  id = "username"  placeholder= "telefone" />
                        <input  id = "username"  placeholder= "mensagem" />
                        
                        
                        <input type="submit" value="Entrar" class="login"/>
                        

                    </form>
                </div>
            </div>    
            <div id = "footer">
              <Rodape/> 
            </div>     
             
        </div>

    );
}