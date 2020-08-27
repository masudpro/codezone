import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { course, price } = props.item;
    return (
        
        <div className="cart p-2" >
        <span>{course}</span> <span> ${price}</span>
        </div>
    );
};

export default Cart;