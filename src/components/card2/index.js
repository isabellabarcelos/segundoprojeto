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
        <div className="card-container2">
            <div>
                <h3>
                <strong>{data.name}</strong>
                </h3>
            </div>
            <div>
                <h3>
                <strong>{data.name}</strong>
                </h3>
            </div>
            <div>
                <strong>Preço: R$ </strong>{data.price}
            </div>
            <div>
            </div>
        </div>
    );
}