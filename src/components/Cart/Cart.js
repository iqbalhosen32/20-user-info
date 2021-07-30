import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    let totalIncome = 0;
    for (let i = 0; i < cart.length; i++) {
        const user = cart[i];
        console.log(user)
        totalIncome = totalIncome + user.income;
    }
    return (
        <div>
            <h2>This is cart {cart.length}</h2>
            <h3>Total Income: {totalIncome}</h3>
        </div>
    );
};

export default Cart;