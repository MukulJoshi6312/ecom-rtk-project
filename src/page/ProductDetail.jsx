import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { add ,remove} from '../redux/slices/cartSlice';


const ProductDetail = () => {
    let { id } = useParams();  
    const [isLoading, setIsLoading] = useState(false);
    const cart = useSelector((state)=>state.cart.products);

    const [posts, setPosts] = useState({});
    const getTheData = async () => {
      setIsLoading(true);
      try {
        const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
        setPosts(res.data);
      } catch (error) {
        console.log("Failed to fetch the data from the API");
      } 
      setIsLoading(false);
    };

    const dispatch =  useDispatch();

    useEffect(() => {
      getTheData();
    }, []);

  return (
    <div className='max-w-6xl flex flex-col md:flex-row mx-auto space-y-10 space-x-5 mt-16'>
      <div className='w-full md:w-1/2  flex justify-center items-center'>
      <img src={posts.image} alt="" className='object-cover w-1/2'/>
      </div>
      <div className=' w-full md:w-1/2 px-8 md:px-12'>
        <p className='font-semibold text-lg md:text-2xl'>{posts.title}</p>
        <p className='py-4 text-gray-700 text-sm md:text-normal'>{posts.description}</p>
        <div className='flex gap-4 items-center'>
        <p className='text-xl md:text-2xl font-bold'>₹{posts.price}</p>
        <p className='line-through'>₹{posts.price+90}</p>
        </div>
        {cart && cart.some((p)=>p.id === posts.id) ? 
        <button className='bg-green-500 px-5 py-2 rounded my-12 w-full font-semibold text-lg text-white'
        onClick={()=>dispatch(remove(posts.id))}>Remove from cart</button>
        : 
        <button className='bg-green-500 px-5 py-2 rounded my-12 w-full font-semibold text-lg text-white'
        onClick={()=>dispatch(add(posts))}>Add to cart</button>
        }
      </div>
    </div>
  )
}

export default ProductDetail
