import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js" 
import React from 'react'

export const ItemListContainer = ({greeting}) => {
    return (
      <div className="d-flex justify-content-center">
        <h1>{greeting}</h1>
      </div>
      );
    };
    export default ItemListContainer;
