import React from 'react';
import CategoryActions from './categoryActions';

const CategoryRow = ({ category }) => {
  return (
    <tr className='text-center'>
      <td className="">{category.id}</td>
      
      <td className="">{category.name}</td>
      <td className="text-center">
        <img src={category.image} alt={category.name} className="h-10 w-10 object-cover mx-auto" />
      </td>
      <td className={`text-center ${category.status === 'active' ? 'text-green-500' : 'text-red-500'}`}>
  {category.status}
     </td>
      <td className="">{category.sequence}</td>

      <td className="">
        <CategoryActions />
      </td>
    </tr>
  );
};

export default CategoryRow;