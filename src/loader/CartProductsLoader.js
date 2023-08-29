import { getShoppingCart } from "../utilities/fakedb";

const CartProductsLoader = async () => {
	const loadedProducts = await fetch('products.json');
	const products = await loadedProducts.json();

	// if cart data is in database, you have to use async await

	const storedCart = getShoppingCart();
	const savedCart = [];
	console.log(storedCart);

	for(const id in storedCart){
		const addedProduct = products.find(pd => pd.id === id)

		if(addedProduct){
			const quantity = storedCart[id];
			addedProduct.quantity = quantity;
			savedCart.push(addedProduct)
		}
	}

	// console.log(products);

	// if you need to send two things using Function
	// return [products,savedCart]

	// another options
	// return {Products, cart: saveCart}

	return savedCart;

}

export default CartProductsLoader