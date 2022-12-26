import React from 'react'
import Product from '../Product/Product';
import './Home.css'

const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        <img src="https://m.media-amazon.com/images/I/61QH1LQm4KL.jpg" alt="" className="home__banner" />
      </div>

      <div className="home__row">
        <Product />
        <Product />
      </div>

      <div className="home__row">
        <Product />
        <Product />
        <Product />
        <Product />
      </div>

      <div className="home__row">
        <Product />
      </div>
    </div>
  )
}

export default Home;