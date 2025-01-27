import React from 'react';
import SubcategoryActions from './SubcategoryActions';

const SubcategoryRow = ({ subcategory }) => {
  return (
    <tr className='text-center '>
      <td className="">{subcategory.id}</td>
      <td className="">{subcategory.name}</td>
      <td className="">{subcategory.category}</td>
      <td className="text-center">
        <img src={subcategory.image} alt={subcategory.name} className="h-10 w-10 object-cover mx-auto" />
      </td>
      <td className={`text-center ${subcategory.status === 'active' ? 'text-green-500' : 'text-red-500'}`}>
  {subcategory.status}
</td>
      <td className="">{subcategory.sequence}</td>
      <td className="">
        <SubcategoryActions />
      </td>
    </tr>
  );
};

export default SubcategoryRow;