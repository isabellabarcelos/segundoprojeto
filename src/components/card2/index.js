import React from 'react';
import "./styles.css";

function Num() {
    var numero = document.getElementById('num');
    numero = 0;
  
    document.getElementById('menos').click(function() {
      numero--;
    });
    document.getElementById('mais').click(function() {
      numero++;
    });
  }
  
export default function Card2({data}) {
    return (
        <div className="card-container">
            <div>
                <h3>
                <strong>{data.name}</strong>
                </h3>
            </div>
                <div>
                    <strong>Preço: </strong>{data.price}
                </div>
            <div>
                <strong>Quant.: </strong>{data.quant}
                <button type="button" className ="Login" id="menos" onclick="Num()"><i class="fa fa-minus-circle"aria-hidden="true"></i></button> &nbsp; 
                <input type="number" name="numero" id="num" oninput="Num()"/> &nbsp;
                <button type="button" className ="Login" id="mais" onclick="Num()"><i class="fa fa-plus-circle" aria-hidden="true"></i></button>
            </div>
            <div>
            <strong>Total.: </strong>{data.quant}
            </div>
        </div>
    );
}