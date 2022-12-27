import React from 'react'
import Subtotal from '../Subtotal/Subtotal'
import './Checkout.css'

const Checkout = () => {
  return (
    <div className='checkout'>
      <div className="checkout__left">

        <img className='checkout__ad' src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/AmazonPay/LPAOffers/April/Prime/Store/V2/LPA501_1500x250.jpg" alt="" />

        <div>
          <h2 className="checkout__title">
            Your Shopping Basket
          </h2>
        </div>
      </div>

      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  )
}

export default Checkout