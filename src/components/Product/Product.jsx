import React from 'react'
import './Product.css'

const Product = ({title, image, price, rating}) => {
  return (
    <div className='product'>
      <div className="product__info">

        <span className='product__name'>
          {title}
        </span>

        <span className='product__price'>
          Rs. {price}
        </span>

        <div className='product__rating'>
          {Array(rating).fill().map((_, i) => (
            <span>&#9733;</span>
          ))}
        </div>

      </div>
      
      <img src={image} alt="" className="product__img" />

      <button className="product_addToCartBtn">Add to cart</button>

    </div>
  )
}

export default Product