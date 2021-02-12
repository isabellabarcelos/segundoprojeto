import React, { useState } from 'react';
import "./styles.css";
import Card2 from "../../components/card2";
import Header from "../../components/Header/index"
import Rodape from "../../components/Rodape/index"
import {Link,useLocation} from "react-router-dom"
import {AiOutlineArrowLeft} from "react-icons/ai"



export default function Carrinho() {
    const {state} = useLocation();
    const data = state.data;
    const [cardList, SetCardList] = useState([
        
       
      ]);
    const renderList = cardList.slice().reverse().map((item) => (
    <li key={item.id.toString()}>
        <Card2 data = {item}/>
    </li>
    )); 
    function AddProduct(){
        const length = cardList.length;
        const NewProduct = {
          id: length + 1, 
          name: data.name,
          brand: data.brand,  
          price: data.price,
        };

        const NewCardList = cardList.concat(NewProduct);
        SetCardList(NewCardList);
    }

    return(
        <div className = "container">
          <Header/>
          <div className = "title-container-details">
              <Link style = {{color: "#ffcbca"}} to = "/"><AiOutlineArrowLeft className= "arrow"/></Link>
              <h1>Meu Carrinho</h1>
            </div>
          <div id = "table">
            <div id ="ul">  
                <ul>{renderList}</ul>
                <div id ="total">  
                <ul><strong>Total</strong></ul>
                </div> 
            </div>   
        
          </div>
         <button className = "login4" onClick = {AddProduct}><strong>Adicionar ao carrinho</strong></button>
          

          <div id = "footer">
            <Rodape/> 
          </div>   
          
     </div> 
    );
}
