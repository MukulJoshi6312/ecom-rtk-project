import React, { useEffect, useState } from 'react'
import { FiSearch } from 'react-icons/fi';


const SerachProduct = ({setFilteredPosts,posts}) => {
      const [searchInput, setSearchInput] = useState("");
      const[serachBy,setSerachBy] = useState(["Products","Brand","Category","More..."])
      const[currentIndex,setCurrentIndex] = useState(0)

      const handleSearch = (e) => {
        e.preventDefault();
        const filteredData = posts.filter((item) =>
          item.title.toLowerCase().includes(searchInput.toLowerCase())
        );
        setFilteredPosts(filteredData);
        setSearchInput("")
      };
      useEffect(()=>{
        const interval = setInterval(()=>{
            setCurrentIndex((prev) => (prev +1) % serachBy.length)
        },2000)
        return ()=> clearInterval(interval);
      },[]) 
    
  return (

       <form onSubmit={handleSearch} className='flex ml-4 outline-1 justify-center rounded-md items-center'>
              <input 
                type="text" 
                placeholder={`Search for ${serachBy[currentIndex]}`}
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                className='py-3 px-4 w-full outline-none'
              />
              <FiSearch
                className='text-3xl mr-3 cursor-pointer'
                onClick={handleSearch}
              />
            </form>

  )
}

export default SerachProduct
