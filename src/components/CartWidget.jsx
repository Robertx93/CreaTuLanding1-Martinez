import React from 'react'
import cartIcon from '../assets/images/cart-icon.png'
import '../index.css'

const CartWidget = ({ itemCount }) => {
    return (
        <div className="cart-widget">
            <img src={cartIcon} alt="Carrito" className="cart-icon" />
            {itemCount > 0 && (
                <span className="item-count">{itemCount}</span>
            )}
        </div>
    );
};

export default CartWidget;