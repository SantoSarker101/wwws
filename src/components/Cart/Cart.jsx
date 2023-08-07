import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
	// const cart = props.cart;
	// const {cart} = props

	console.log(cart);

	let totalPrice = 0;
	let totalShipping = 0;
	for(let product of cart){
		totalPrice = totalPrice + product.price
		totalShipping = totalShipping + product.shipping
	}
	let tax = totalPrice * 7/100
	let grandTotal = totalPrice + totalShipping + tax


	return (
		<div className='cart'>
			<h4>Order Summary</h4>
				<p>Selected Items: {cart.length}</p>
				<p>Total Price: ${totalPrice}</p>
				<p>Total Shipping: {totalShipping}</p>
				<p>Tax: {tax.toFixed(2)}</p>
				<h6>Grand Total: ${grandTotal.toFixed(2)}</h6>

		</div>
	);
};

export default Cart;