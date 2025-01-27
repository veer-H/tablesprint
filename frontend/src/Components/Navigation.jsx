import React from 'react';
import logo from '../assets/Group 1000004704.png';
import profileIcon from '../assets/Group 2609118.png';
const Navigation = () => {
  return (
    <header className="flex items-center justify-between bg-[#662671]  p-4 border-b">
      
      <div className="cursor-pointer"><img src={logo} alt="" /></div>
      <div className="flex items-center space-x-4">
       
      <div className="cursor-pointer"><img src={profileIcon} alt="" /></div>
        
      </div>
    </header>
  );
};

export default Navigation;