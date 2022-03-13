import React from 'react'
import { BsFillCartCheckFill } from "react-icons/bs";



const TopHeader = () => {
  return (
    <div className='top-header'>
        <h1>CafeStudioBakery</h1>
        <hr />
    </div>
  )
}

const Navbar = () => {
    return (
        <nav>
            <p>Home</p>
            <p>Gallery</p>
            <p>Shop</p>
            <p>Blog</p>
            <p>Pages</p>
            <p>Elements</p>
            <p>Contact US</p>
            <h1 id='cart-icon'> <BsFillCartCheckFill /> </h1>
        </nav>
    )
}




export default TopHeader;
export {Navbar};