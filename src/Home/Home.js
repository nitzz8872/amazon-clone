import React from 'react'
import Product from '../Product/Product'
import banner from './banner.jpg'
import './home.css'

function Home() {
    return (
        <div className='home'>
            <img className='banner-image' src={banner} alt='Banner '></img>
            
<div className="home-row">     
 <Product
            id="123456"
            title="Prestige Sandwich Maker"
            price={1295}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/61WoiMnaLlL._SL1000_.jpg"
            />
             <Product
            id="123457"
            title="The Lean Startup Book"
            price={195}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg"
            />
</div>
<div className="home-row">
<Product
            id="1234564"
            title="Apple MacBook Air (13-inch, 8GB RAM, 128GB Storage, 1.8GHz Intel Core i5) - Silverr"
            price={ 92110}
            rating={2}
            image="https://images-na.ssl-images-amazon.com/images/I/71Ae0NSObSL._SL1500_.jpg"
            />
             <Product
            id="12345698"
            title="Milton Thermosteel Flip Lid Flask, 350 milliliters, Silver"
            price={452}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/81rH77WKrlL._SL1500_.jpg"
            />
             <Product
            id="12345641"
            title="PAUSE Men's Cotton Round Neck Cardigan"
            price={399}
            rating={2}
            image="https://m.media-amazon.com/images/I/71ZmeNYVQSL._AC_UL320_.jpg"
            />
    </div>  
  

    <div className="home-row">
    <Product
            id="12345666"
            title="
            LG 24-inch, Full HD IPS (1920 x 1080) Monitor, Inbuilt Speaker,"
            price={129500}
            rating={3}
            image="https://m.media-amazon.com/images/I/81rpK20lAtL._AC_UY218_.jpg"
            />
    </div>
        </div>

    )
}

export default Home;
