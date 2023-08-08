import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDb,getShoppingCart } from '../../utilities/fakedb';

const Shop = () => {
	const [products,setProducts] = useState([])
	const [cart, setCart] = useState([])

	useEffect(()=>{
		fetch('products.json')
		.then(res => res.json())
		.then(data => setProducts(data))
	},[])

	useEffect(() => {
		const storedCart = getShoppingCart();
		// console.log(storedCart);

		const savedCart = [];
		// step 1: get id

		for(const id in storedCart){
			// console.log(id);

			// step 2 get the product by using id
			const addedProduct = products.find(product  => product.id === id)

			if(addedProduct){
				// step 3: get quantity of the product
				const quantity = storedCart[id]
				addedProduct.quantity = quantity

				// step 4: add the addedProduct to the savedCart
				savedCart.push(addedProduct)
			}
			console.log('added Product',addedProduct);

			// step 3: get quantity of the product
			// const quantity = storedCart[id];
			// addedProduct.quantity = quantity;
			// console.log(addedProduct);

		}

		// step 5: set the cart
		setCart(savedCart);

	},[products])

	const handleAddToCarttt = (productt) => {
		// console.log(product);
		const newCart = [...cart,productt]
		setCart(newCart);
		// console.log(cart);
		addToDb(productt.id)
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