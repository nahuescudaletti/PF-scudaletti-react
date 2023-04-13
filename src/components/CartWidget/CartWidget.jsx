import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import React from 'react'

export const CartWidget = () => {
    return (
        <div>
          <i className="material-icons">cart</i>
          <span className="cart-notification">2</span>
        </div>
      );
    };
    export default CartWidget;