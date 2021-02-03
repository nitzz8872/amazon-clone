import React from 'react'
import { useStateValue } from '../StateProvider';
import CheckoutProduct from './CheckoutProduct'
import './Checkout.css'
import CurrencyFormat from 'react-currency-format'
import Subtotal from './Subtotal'
function Checkout() {
    const [{basket}] = useStateValue();
    return (
        <div className="checkout">
            <div className='checkout-left'>
            <img className="product-ad" src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/SamsungM/M02/Teaser/Rv3/D19805912_IN_WLME_SamsungGalaxy_M02s_New_Launch_mob_1242x450._CB660821107_SY250_.jpg" alt=""/>
        
        {basket?.length === 0 ? (
            <div>
            <h2>Your Amazon Cart is empty.</h2>
            </div>
        ):(
            <div>
            <h2 className="checkout-title">Your Shopping Basket</h2>
            {
                basket.map(item => (
                    <CheckoutProduct
                    id = {item.id}
                    title = {item.title}
                    image = {item.image}
                    price = {item.price}
                    rating = {item.rating}
                    />
                ))
            }

            </div>
        )}
        </div>
        {basket.length > 0 && (
            <div className="checkout-right">
               
                <Subtotal/>
            </div>

        )}
</div>
    
    )}

export default Checkout;
