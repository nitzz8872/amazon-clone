import React from 'react'
import { useStateValue } from '../StateProvider';
import './product.css'; 

function Product({id, title, image,price,rating}) {
    const [{}, dispatch] = useStateValue();
    const addToBasket = () => {
        //add items to basket
        dispatch({
            type:"ADD_TO_BASKET",
            item: { 
                id:id,
                title:title,
                image:image,
                price:price,
                rating:rating,
            },
        });
    };
    return (
        <div className='product'>
            <div className="product-info">
            <div>{title}</div>
            <p className="product-price">
                <small>&#8377;</small>
                <strong>{price}</strong>
            </p>
            <div class="product-rating">
                {Array(rating)
                     .fill()
                     .map((_) =>(
                        <p>⭐</p>
                     ))}
            </div>
            </div>
            <img src={image} alt=""/>
            <button onClick={addToBasket}>Add to basket</button>            

        </div>
    ) 
}

export default Product
