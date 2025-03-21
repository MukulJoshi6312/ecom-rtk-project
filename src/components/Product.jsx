import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { add, remove } from '../redux/slices/cartSlice';
import { toast } from 'react-toastify';
import { Link } from 'react-router';

const Product = ({post}) => {

  const cart = useSelector((state)=>state.cart.products);
  const dispatch = useDispatch();

  const removeFromCart = () =>{
    dispatch(remove(post.id))
    toast.error("Item remove from Cart")

  }

  const addToCart = () =>{
      dispatch(add(post))
      toast.success("Item Added to Cart")
  }

  return (
    <div className='flex flex-col items-center justify-between hover:scale-105 transition duration-300 ease-in gap-3 p-4 mt-10 ml-5 rounded-xl shadow-xl h-fit md:h-96'>
    <Link to={`/product/${post.id}`}>
      <div>
        <p className='text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1'>{post.title}</p>
      </div>
      <div>
        <p className='w-40 text-gray-400 font-normal text-[10px] text-left'>
        {post.description.slice(0,100)+"..."}
        </p>
      </div>
      <div className='h-[180px]'>
        <img src={post.image} alt={post.title} className='h-full w-full' />
      </div>
      </Link>


      <div className='flex  flex-col md:flex-row justify-between gap-3 md:gap-12 md:items-center w-full mt-5'>

      <div>
        <p className='text-green-600 font-semibold '>₹{post.price}</p>
      </div>
      {
        cart && cart.some((p)=>p.id === post.id) ? 
        (
          <button onClick={removeFromCart}
          className='text-gray-700 border-2 border-gray-700 rounded-full font-semibold
          text-[12px] p-1 px-3 uppercase hover:bg-gray-700 hover:text-white transition duration-300 ease-in'
          >Remove Item</button>
        )
        :
        (
          <button onClick={addToCart}  className='text-gray-700 border-2 border-gray-700 rounded-full font-semibold
          text-[12px] p-1 px-3 uppercase hover:bg-gray-700 hover:text-white transition duration-300 ease-in'>Add to Cart</button>
        )
      }
    </div>
    </div>

  )
}

export default Product
