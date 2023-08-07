import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';

const Shop = () => {
	const [products,setProducts] = useState([])
	const [cart, setCart] = useState([])

	useEffect(()=>{
		fetch('products.json')
		.then(res => res.json())
		.then(data => setProducts(data))
	},[])

	const handleAddToCarttt = (productt) => {
		// console.log(product);
		const newCart = [...cart,productt]
		setCart(newCart);
		console.log(cart);
	}
	return (
		<div className="shop-container">
			<div className="products-container">


					{
						products.map(product => <Product key = {product.id} productt = {product} handleAddToCartt = {handleAddToCarttt}></Product>)
					}

			</div>

			<div className="cart-container">
				<Cart cart = {cart}></Cart>

			</div>

		</div>
	);
};

export default Shop;