import React from 'react';
import "./styles.css";
import Card2 from "../../components/card2";
import Header from "../../components/Header/index"
import Rodape from "../../components/Rodape/index"
import { FaTrashRestoreAlt } from 'react-icons/fa';


export default function Carrinho() {
    const list = [
        {
          id : 1,
          name: "Iogurte de morango 1L",
          price: "R$ 6,00",
          quant: "",
        },
        {
          id : 2,
          name: "Iogurte natural 1L",
          price: "R$ 6,00",
          quant: "",
        },
        {
          id : 3,
          name: "Iogurte de ameixa 1L",
          price: "R$ 6,00",
          quant: "",
        },
        {
          id : 4,
          name: "Leite integral 1L",
          price: "R$ 4,00",
          quant: "",
        },
        {
          id : 5,
          name: "Leite desnatado 1L",
          price: "R$ 4,00",
          quant: "",
        },
        {
          id : 6,
          name: "Manteiga sem sal 500g ",
          price: "R$ 8,00",
          quant: "",
        },
        {
          id : 7,
          name: "Manteiga com sal 500g",
          price:"8,00",
          quant: "",
        },
        {
          id: 8,
          name: "Total",
          total:"",
        }
      ];
    const renderList = list.map((item) => (
    <li key={item.id.toString()}>
        <Card2 data = {item}/>
    </li>
    )); 
  
    return (
        <div className = "container">
            <Header/>
            <div className = "title-container">
                <h1>Meu Carrinho</h1>
            </div>
    
            <div id ="table">
                <ul id ="ul">{renderList}</ul>
            </div>
           
            <Rodape/>
            
        </div>
    );
}
