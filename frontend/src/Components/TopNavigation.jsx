import React from 'react';
import categoryIcon from '../assets/Group.png';
const TopNavigation = ({ disabled, currentPage }) => {
if (disabled) {
  return null;
}else{
  return (
    <header className="flex items-center justify-between bg-gray-100 p-4 border-b">
    
     <div className="cursor-pointer flex items-center"><img src={categoryIcon} alt="" /><span className='ml-2 text-lg'>{currentPage.name}</span></div>
    <div className="flex items-center space-x-4">
      <input
        type="text"
        placeholder="Search..."
        className="border rounded px-2 py-1"
      />
      <button className="bg-blue-500 text-white px-4 py-2 rounded">Add {currentPage.name}</button>
      
    </div>
  </header>
);
}

  
};

export default TopNavigation;