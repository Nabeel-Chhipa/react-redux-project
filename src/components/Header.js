import React from 'react'
import cart from "../assets/cart.jpg";

const Header = (props) => {
  // console.log("Props from Header component:", props.data);
  return (
    <div>
        <span className="cartCounter">{props.data.length}</span>
            <div className="add-to-cart_wrapper">
        <img src={cart} alt="cart" />
      </div>
    </div>
  )
}

export default Header