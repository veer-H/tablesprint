import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import CategoryRow from './categoryRow';        

const CategoryTable = () => {

   const categorys1 = [
     { id: 2, name: 'Product B', subCategory: 'Sub B', category: 'Cat B', status: 'Inactive' },
  ];

const [categorys, setCategorys] = useState([]);

useEffect(() => {
  const fetchCategorys = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/v1/category/get-category'); // Replace with your API endpoint
      const { data } = response.data;

      const transformedCategorys = data.map((category, index) => ({
        id: index + 101,
        name: category.categoryname,
        sequence: category.sequence,
        status: category.status,
        image: category.avatar
        }));

      setCategorys(transformedCategorys);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  fetchCategorys();
}, []);


  return (
    <table className="w-full">
      <thead>
        <tr className='bg-[#F4EDAF]'>
          <th className="">Id</th>
          <th className="">Category Name</th>
          <th className="">Image</th>
          <th className="">Status</th>
          <th className="">Sequence</th>
          <th className="">Actions</th>
        </tr>
      </thead>
      <tbody>
        {categorys.map((category) => (
          <CategoryRow key={category.id} category={category} />
        ))}
      </tbody>
    </table>
  );
};

export default CategoryTable;