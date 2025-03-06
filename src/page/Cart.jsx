import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router';
import CartItem from '../components/CartItem';
import ChangeAddress from '../components/ChangeAddress';

const Cart = () => {
  const cart = useSelector((state)=>state.cart.products);
  const [totalAmount,setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart?.reduce((acc, curr) => acc + curr.price, 0) || 0);
  }, [cart]);
  

  console.log(cart)
  return (
    // <div className='max-w-6xl  p-2 mx-auto space-y-10 bg-yellow-700'>
    //   {
    //     cart &&  cart.length > 0 ? 
    //     ( <div className='flex gap-8 relative'>
          
    //       <div className='mt-8 mb-8'>
    //       {
    //         cart.map((item,index)=>(
    //           <CartItem key={item.id} item={item} index={index}/>
    //         ))
    //       }
    //       </div>

    //       <div className='bg-red-100 w-full h-[600px]'>
    //         <div>
    //           <div>Your Cart</div>
    //           <div>Summary</div>
    //           <p>
    //             <span>Total Items : {cart.length}</span>
    //           </p>
    //         </div>
    //         <div>
    //           <p>Total Amount : {totalAmount}</p>
    //           <button>Checkout Now</button>
    //         </div>
    //       </div>
          

    //     </div> ) : 
    //     ( <div>
    //       <h1>Cart Empty</h1>
    //       <Link to="/">
    //       <button>Shop Now</button>
    //       </Link>
    //     </div> ) 
    //   }

    // </div>

    <div className="max-w-6xl p-2 mx-auto space-y-10">
  {cart && cart.length > 0 ? (
    <div className="flex flex-col md:flex-row gap-8">
      
      {/* Cart Items Section */}
      <div className="mt-8 mb-8 flex-1">
        {cart.map((item, index) => (
          <CartItem key={item.id} item={item} index={index} />
        ))}
      </div>

      {/* Cart Summary Section */}
      <div className=" w-full h-[500px] md:w-[400px] md:h-[500px] p-6 rounded-lg shadow-lg 
                      sticky top-5 self-start">
        <div>
          <div className="text-xl font-semibold text-green-500 ">Your Cart</div>
          <div className="font-bold  text-green-500 py-4 text-3xl">Summary</div>
          <p>
            <span>Total Items: {cart.length}</span>
          </p>
        </div>
          <ChangeAddress/>
        <div className="mt-4 absolute bottom-10">
          <p className="text-lg">Total Amount: <span className=' font-bold '>₹{totalAmount.toFixed(2)}</span></p>
          <button className="mt-4 bg-green-500  md:w-[300px] text-white py-2 px-4 rounded hover:bg-green-600">
            Checkout Now
          </button>
        </div>
      </div>

    </div>
  ) : (
    <div className="flex flex-col justify-center items-center h-[500px]">
      <h1 className="text-2xl font-bold">Cart Empty</h1>
      <Link to="/">
        <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
          Shop Now
        </button>
      </Link>
    </div>
  )}
</div>

  )
}

export default Cart
