import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js" 
import React from 'react'
import pantalones from "../../data/pantalones/pantalones";

export const ItemListContainer = ({greeting}) => {
    return (
   
              <div className="card text-bg-dark">
                {pantalones.map((pantalon)=>(
                  <div key={pantalon.id}>
                    <img className="card-img" src={pantalon.image} alt={pantalon.name} />
                    <h2 className="card-title">{pantalon.name}</h2>
                    <h3 className="card-text">{pantalon.color}</h3>
                  </div>
                ))}
              </div>
    );
    }
    export default ItemListContainer;
