import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = (props) => {
	// console.log(props);
	const {img,name,seller,quantity,price,ratings} = props.productt;

	const handleAddToCart = props.handleAddToCartt


	return (
		<div className='product'>
			<img src={img} alt="" />

			<div className="product-info">

			<h6 className='product-name'>{name}</h6>
			<p>Price: ${price}</p>
			<p>Manufacturer: {seller}</p>
			<p>Rating: {ratings}</p>

			</div>

			<button onClick={() => handleAddToCart(props.productt)} className='btn-cart'>Add to Cart
			<FontAwesomeIcon icon={faShoppingCart}/>
			</button>
		</div>
	);
};

export default Product;