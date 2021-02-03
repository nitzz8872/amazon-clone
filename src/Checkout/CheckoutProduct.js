import React from 'react'
import './CheckoutProduct.css'
import {useStateValue} from '../StateProvider'


function CheckoutProduct({id, title, image, price, rating}) {
    const [{basket}, dispatch] = useStateValue();
    const removeFromBasket = () => {
        dispatch({
            type:"REMOVE_FROM_BASKET",
            id:id
        });
    }

    return (
        <div className="checkout-product">
            <img className="checkout-product-image" src={image} alt=''/>
            <div className="checkout-product-info">
                <p className="checkout-product-title">{title}</p>
                <p className="checkout-product-price">
                <small>&#8377;</small>
                <strong>{price}</strong>
                </p>
                <div class="checkout-product-rating">
                {Array(rating)
                     .fill()
                     .map((_) =>(
                        <p>⭐</p>
                     ))}
            </div>

            <button onClick={removeFromBasket}>Remove from basket</button>


            </div>
        </div>
    )
}

export default CheckoutProduct
