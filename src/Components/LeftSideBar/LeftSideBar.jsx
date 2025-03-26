import React from 'react';
import { FaSearch } from 'react-icons/fa';

const LeftSideBar = () => {
  return (
    <div className='w-1/4 p-4 border-r border-gray-300 h-screen overflow-y-auto'>
      <h1 className='text-orange-500 font-bold text-xl mb-4'>GSoC Organizations</h1>
      <button className='w-full bg-orange-500 text-white py-2 rounded-md mb-4 hover:bg-orange-600'>
        Clear all filters
      </button>
      
      <div className='mb-4 items-center flex flex-col'>
        <h2 className='text-gray-700 font-semibold mb-2'>Shortcuts</h2>
        <div className='relative mb-2'>
          <input 
            type='text' 
            placeholder='Search shortcuts' 
            className='w-full p-2 border rounded-md pl-8'
          />
          <FaSearch className='absolute left-2 top-3 text-gray-500' />
        </div>
        <label className='flex items-center space-x-2'>
          <input type='checkbox' className='w-4 h-4' />
          <span>First-time organizations (14)</span>
        </label>
      </div>
      
      <div className='mb-4'>
        <h2 className='text-gray-700 font-semibold mb-2'>Years</h2>
        <div className='relative mb-2'>
          <input 
            type='text' 
            placeholder='Search years' 
            className='w-full p-2 border rounded-md pl-8'
          />
          <FaSearch className='absolute left-2 top-3 text-gray-500' />
        </div>
        <div className='flex flex-col space-y-1'>
          {[2025, 2024, 2023, 2022, 2021, 2020].map((year) => (
            <label key={year} className='flex items-center space-x-2'>
              <input type='checkbox' className='w-4 h-4' />
              <span>{year}</span>
            </label>
          ))}
        </div>
        <button className='text-blue-500 mt-2'>View all</button>
      </div>
      
      <div className='mb-4'>
        <h2 className='flex items-center text-gray-700 font-semibold mb-2'>Years</h2>
        <div className='relative mb-2'>
          <input 
            type='text' 
            placeholder='Search years' 
            className='w-full p-2 border rounded-md pl-8'
          />
          <FaSearch className='absolute left-2 top-3 text-gray-500' />
        </div>
        <div className='flex flex-col space-y-1'>
          {[2025, 2024, 2023, 2022, 2021, 2020].map((year) => (
            <label key={year} className='flex items-center space-x-2'>
              <input type='checkbox' className='w-4 h-4' />
              <span>{year}</span>
            </label>
          ))}
        </div>
        <button className='text-blue-500 mt-2'>View all</button>
      </div>
      
      <div className='text-center mt-6 text-gray-600'>
        <span>Made with ❤️ by <a href='#' className='text-orange-500 font-semibold'>nishantwrp</a></span>
        <div className='flex justify-center space-x-4 mt-2'>
          <button className='flex items-center space-x-1 bg-gray-200 px-3 py-1 rounded-md'>
            <span>⭐</span> <span>480</span>
          </button>
          <button className='bg-gray-200 px-3 py-1 rounded-md'>🔗</button>
          <button className='bg-gray-200 px-3 py-1 rounded-md'>🐦</button>
        </div>
      </div>
    </div>
  );
};

export default LeftSideBar;
