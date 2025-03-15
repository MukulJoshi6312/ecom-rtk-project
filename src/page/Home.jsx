import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Product from '../components/Product';
import Spinner from '../components/Spinner';
import { FiSearch } from "react-icons/fi";
import { useSelector,useDispatch } from 'react-redux';
import { fetchProducts } from '../redux/slices/cartSlice';
import SerachProduct from '../components/SerachProduct';

const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [page, setPage] = useState(1);

  // const { products, status, error } = useSelector((state) => state.cart);
  


  const getTheData = async () => {
    setIsLoading(true);
    try {
      const res = await axios.get('https://fakestoreapi.com/products');
      setPosts(res.data);
      setFilteredPosts(res.data);
    } catch (error) {
      console.log("Failed to fetch the data from the API");
    } 
    setIsLoading(false);
  };

  // useEffect(() => {
  //   dispatch(fetchProducts());
  // }, [dispatch]);

  useEffect(() => {
    getTheData();
  }, []);

  

  const handlePageChange = (selectedPage) => {
    if (selectedPage >= 1 && selectedPage <= Math.ceil(filteredPosts.length / 5) && selectedPage !== page) {
      setPage(selectedPage);
    }
  };

  return (
    <div className='max-w-6xl mx-auto space-y-10 space-x-5'>
       {/* Search Bar */}
       <div className='my-4'>
        <SerachProduct setFilteredPosts={setFilteredPosts} posts={posts}/>
          </div>
      {isLoading ? <Spinner /> : filteredPosts.length > 0 ? (
        <div>
        
          {/* Product Grid */}
          <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 min-h-[80vh]'>
            {filteredPosts.slice(page * 5 - 5, page * 5).map((post) => (
              <Product key={post.id} post={post} />
            ))}
          </div>
        </div>
      ) : (
        <div className='flex justify-center items-center'> 
          <p>No Data Found</p>
        </div>
      )}

      {filteredPosts.length > 0 && (
        <div className='flex justify-center items-center w-full mb-16 mt-8'>
          <div className='cursor-pointer'>
            <span className='border px-5 py-3' onClick={() => handlePageChange(page - 1)}>Prev</span>
            {[...Array(Math.ceil(filteredPosts.length / 5))].map((_, index) => (
              <span 
                key={index + 1} 
                className={`border px-5 py-3 ${page === index + 1 ? "bg-gray-900 text-white border-gray-900" : ""}`} 
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </span>
            ))}
            <span className='border px-5 py-3' onClick={() => handlePageChange(page + 1)}>Next</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
