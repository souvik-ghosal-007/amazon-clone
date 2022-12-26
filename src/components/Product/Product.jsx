import React from 'react'
import './Product.css'

const Product = () => {
  return (
    <div className='product'>
      <div className="product__info">

        <span className='product__name'>
          Lorem ipsum
        </span>

        <span className='product__price'>
          Rs. 2000
        </span>

        <span className="product__rating">
          &#9733;&#9733;&#9733;&#9733;&#9733;
        </span>

      </div>
      
      <img src="https://www.orderyourbooks.com/wp-content/uploads/2022/08/41-2.jpg" alt="" className="product__img" />

      <button className="product_addToCartBtn">Add to cart</button>

    </div>
  )
}

export default Product