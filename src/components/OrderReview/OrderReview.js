import React from 'react';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import useCart from '../hooks/useCart';
import useProducts from '../hooks/useProducts';
import ReviewItem from '../ReviewItem/ReviewItem';

const OrderReview = () => {
    const [products] = useProducts();
    const [cart, setCart] = useCart(products);
    console.log(cart);
    
    const handleRemoveItem = key =>{
        const newCart = cart.filter(product => product.key !== key );
        setCart(newCart);
        console.log(newCart);
        removeFromDb()
    };
    
    return (
        <div className="shop-container">
           <div className="product-container">
                {
                    cart.map(product=><ReviewItem 
                        key={product.key}
                        product={product}
                        handleRemoveItem={handleRemoveItem}
                    ></ReviewItem>)
                }
           </div>
           <div className="cart-container">
            <Cart cart={cart}></Cart>
           </div>
        </div>
    );
};

export default OrderReview;