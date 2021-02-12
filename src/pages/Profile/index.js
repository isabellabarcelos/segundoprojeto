import React from 'react';
import "./styles.css";
import Header from "../../components/Header/index";
import Rodape from "../../components/Rodape/index";

export default function Profile() {
    return (
    
      <div id = "body"> 
            <div><Header/></div>
        <div id ="div">
        
                <form>
                    <div id = "brand-image">
                    </div>
                    <h2>Perfil</h2>

                </form>
            </div>
        
            <div id ="footer"><Rodape/></div>
             
            
        </div>    
              
        
    );
}
