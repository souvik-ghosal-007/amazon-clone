import React from 'react'
import CurrencyFormat from 'react-currency-format'
import './Subtotal.css'

const Subtotal = () => {
  return (
    <div className='subtotal'>
      <CurrencyFormat 
          renderText = {(value) => (
            <div className="subtotal__text">
              <p> Subtotal (0 items): <strong>0</strong> </p>
              <small className='subtotal__gift'><input type="checkbox"/> This order contains a gift</small>
            </div>
          )}
          decimalScale={2}
          value={0}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"₹"}
        />

      <button>
        Proceed to Checkout
      </button>
    </div>
  )
}

export default Subtotal