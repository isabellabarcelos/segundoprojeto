import React from 'react';
import "./styles.css";
import Header from "../../components/Header/index"
import Rodape from "../../components/Rodape/index"


export default function AboutUs() {
    return (
     
        <div className = "container-shopping">
           <div>
             <Header/>
           </div>
           
                <div id = "div3">
                    <form>
                        <div id = "brand-image">
                        </div>
                        <h2 id = "key-title">Quem somos</h2>
                        <div id ="about-box">
                            <p>Somos uma marca de latícinios com foco na produção de iogurtes e nosso objetivo é fabricar produtos de qualidade para diversificar suas refeições.</p>
                            <p>Nossa central de atendimentos fica no Rio de Janeiro.</p>
                            <p>Fazemos entregas para todo o Brasil. Confira as condições de frete!</p>
                        </div>

                    </form>
                </div>
             
            <div id = "footer">
              <Rodape/> 
            </div>     
             
        </div>

    );
}