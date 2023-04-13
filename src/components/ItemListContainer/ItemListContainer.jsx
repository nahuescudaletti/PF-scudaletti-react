import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import React from 'react'

export const ItemListContainer = ({greeting}) => {
    return (
        <div className="container">
          <h1>{greeting}</h1>
          <p>contenido!!!</p>
        </div>
      );
    };
    export default ItemListContainer;
