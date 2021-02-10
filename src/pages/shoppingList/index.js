import React from 'react';
import "./styles.css";
import Card from "../../components/card";
import Header from "../../components/Header/index"
import Rodape from "../../components/Rodape/index"


export default function ShoppingList() {
    const list = [
        {
          id : 1,
          image: "",
          name: "Iogurte de morango 1L",
          price: "R$ 6,00"
        },
        {
          id : 2,
          image: "",
          name: "Iogurte natural 1L",
          price: "R$ 6,00"
        },
        {
          id : 3,
          image: "",
          name: "Iogurte de ameixa 1L",
          price: "R$ 6,00"
        },
        {
          id : 4,
          image: "",
          name: "Leite integral 1L",
          price: "R$ 4,00"
        },
        {id : 5,
          image: "",
          name: "Leite desnatado 1L",
          price: "R$ 4,00"
        },
        {
          id : 6,
          image: "",
          name: "Manteiga sem sal 500g ",
          price: "R$ 8,00"
        },
        {
          id : 7,
          image: "",
          name: "Manteiga com sal 500g",
          price: "R$ 8,00"
        }
      ];
    
    const renderList = list.map((item) => (
        <li key={item.id.toString()}>
            <Card data = {item}/>
        </li>
      )); 
    return (
        <div className = "container">
            <Header/>
            <div className = "title-container">
                <h1>Produtos</h1>
            </div>
            <div id = "ul">
                <ul>{renderList}</ul>
            </div>
            <Rodape/>
          
        </div>
    );
}