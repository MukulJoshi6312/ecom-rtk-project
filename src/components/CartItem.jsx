import React from 'react'
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { remove } from '../redux/slices/cartSlice';
import { toast } from 'react-toastify';


const CartItem = ({item}) => {
const dispatch = useDispatch();
const cart = useSelector((state)=>state.cart.products);
const newLength = cart.length;


  const removeFromCart = () =>{
    dispatch(remove(item.id));
    toast.error("Item Removed successfully")
  }

  return (
    <div className=''>
      <div className={`flex justify-between gap-8 border-b-1 border-gray-700 w-full p-4 `} >
        <div className='flex items-center'>
          <img src={item.image} alt={item.title} className='w-48 bg-cover'/>
        </div>

        <div>
          <h1 className='font-bold text-md md:text-lg lg:text-xl'>{item.title}</h1>
          <p className='text-gray-700 text-sm my-4'>{item.description.slice(0,90)+"..."}</p>
          <div className='flex justify-between items-center'>
            <p className='font-semibold text-green-500 text-xl '>${item.price}</p>
            <div onClick={removeFromCart} className='text-2xl w-8 h-8 rounded-full bg-red-300 flex justify-center items-center'>
              <MdDelete className='text-red-800'/>
            </div>
          </div>

        </div>

      </div>

    </div>
  )
}

export default CartItem
