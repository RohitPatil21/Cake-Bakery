import React from 'react'
import { BsFillCartCheckFill } from "react-icons/bs";



const Product = (props) => {
  return (
    <div className='product'>
        <img src={props.imgUrl}></img>
        
        <p> {props.name} </p>
        <p> {props.price} </p>
        
        <div className='btn-container'>
            <button className='btn add-to-cart' >Add To Cart <BsFillCartCheckFill /> </button>
            <button className='btn buy' >Buy</button>
        </div>
        
    </div>
  )
}

export default Product