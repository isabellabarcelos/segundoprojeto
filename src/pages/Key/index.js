import React from 'react';
import "./styles.css";
import Header from "../../components/Header/index"
import Rodape from "../../components/Rodape/index"


export default function Key() {
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
                        <h2 id = "key-title">Recuperar Senha</h2>
                        <input  id = "username"  placeholder= "email" />                        
                        <input type="submit" value="Enviar" class="login"/>
                        

                    </form>
                </div>
            </div>    
            <div id = "footer">
              <Rodape/> 
            </div>     
             
        </div>

    );
}