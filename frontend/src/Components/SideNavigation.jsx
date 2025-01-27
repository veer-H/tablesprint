import React from 'react';
import dashboardIcon from '../assets/home.png';
import categoryIcon from '../assets/Group.png';
import subcategoryIcon from '../assets/list 1.png';
import productsIcon from '../assets/Group 2609141.png';

const links = [
  { name: 'Dashboard', icon: dashboardIcon },
  { name: 'Category', icon: categoryIcon },
  { name: 'Subcategory', icon: subcategoryIcon },
  { name: 'Products', icon: productsIcon },
];

const SideNavigation = ({ selectedPage, onSelectPage }) => {
  return (
    <nav className="bg-[#F4F4F4] text-black w-64">
      <ul>
        {links.map((link) => (
          <li
            key={link.name}
            className={`p-4 cursor-pointer ${selectedPage === link.name ? 'bg-[#F4EDAF] flex items-center' : 'flex items-center'}`}
            onClick={() => onSelectPage(link.name)}
          >
            <img src={link.icon} alt={link.name} className="w-4 h-4 mr-2" />
            {link.name}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SideNavigation;