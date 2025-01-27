import React from 'react';
import SubcategoryRow from './SubcategoryRow';
import axios from 'axios';
import { useState, useEffect } from 'react';

// const SubcategoryTable = () => {
//   const subcategories = [
//     { id: 1, name: 'Sub A', category: 'Cat A', image: 'image1.jpg', status: 'Active', sequence: 1 },
//     { id: 2, name: 'Sub B', category: 'Cat B', image: 'image2.jpg', status: 'Inactive', sequence: 2 },
//   ];
  const SubcategoryTable = () => {
    const [subcategories, setSubcategories] = useState([]);
  
    useEffect(() => {
      const fetechSubcategories = async () => {
        try {
          const response = await axios.get('http://localhost:3000/api/v1/subcatogory/get-subcatogory'); // Replace with your API endpoint
          const { data } = response.data;
  
          const transformedSubcategories = data.map((subcategory, index) => ({
            id: index + 101,
            name: subcategory.subcategoryname,
            subCategory: subcategory.categoryname.categoryname,
            category: subcategory.categoryname.categoryname,
            status: subcategory.categoryname.status,
            image: subcategory.categoryname.avatar,
            sequence: subcategory.categoryname.sequence
          }));
  
          setSubcategories(transformedSubcategories);
        } catch (error) {
          console.error('Error fetching products:', error);
        }
      };
  
      fetechSubcategories();
    }, []);

  return (
    <table className="w-full">
      <thead className='bg-[#F4EDAF]'>
        <tr>
          <th className="">Id</th>
          <th className="">Subcategory Name</th>
          <th className="">Category Name</th>
          <th className="">Image</th>
          <th className="">Status</th>
          <th className="">Sequence</th>
          <th className="">Actions</th>
        </tr>
      </thead>
      <tbody>
        {subcategories.map((subcategory) => (
          <SubcategoryRow key={subcategory.id} subcategory={subcategory} />
        ))}
      </tbody>
    </table>
  );
};

export default SubcategoryTable;