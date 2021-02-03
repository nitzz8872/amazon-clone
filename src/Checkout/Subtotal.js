import React from 'react'
import './Subtotal.css'
import { useStateValue } from '../StateProvider';
import CurrencyFormat from 'react-currency-format'
import {getBasketTotal} from '../reducer'

function Subtotal() {
    const [{basket}] = useStateValue();
    return (
        <div className="subtotal">

            <CurrencyFormat 
                renderText = { (value) => (
                    <div>
                    <p>
                        Subtotal ({basket.length} items): <strong>{value}</strong>
                    </p>
                    <small className="subtotal-gift">
                        <input type="checkbox" />This Order Contains Gift!
                    </small>
                    </div>
                )}

                decimalScale={2}                
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"₹"}
            />

            <button>Proceed To Checkout</button>
        </div>
    )
}

export default Subtotal
