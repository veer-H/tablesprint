import React from 'react';
import ProductRow from './ProductRow';
import axios from 'axios';
import { useState, useEffect } from 'react';

// const ProductTable = () => {
//   const products = [
//     { id: 1, name: 'Product A', subCategory: 'Sub A', category: 'Cat A', status: 'Active' },
//     { id: 2, name: 'Product B', subCategory: 'Sub B', category: 'Cat B', status: 'Inactive' },
//   ];
  const ProductTable = () => {
    const [products, setProducts] = useState([]);
  
    useEffect(() => {
      const fetchProducts = async () => {
        try {
          const response = await axios.get('http://localhost:3000/api/v1/product/get-product'); // Replace with your API endpoint
          const { data } = response.data;
  
          const transformedProducts = data.map((product, index) => ({
            id: index + 101,
            name: product.name,
            subCategory: product.SubCategory.subcategoryname,
            category: product.SubCategory.categoryname.categoryname,
            status: product.SubCategory.categoryname.status
          }));
  
          setProducts(transformedProducts);
        } catch (error) {
          console.error('Error fetching products:', error);
        }
      };
  
      fetchProducts();
    }, []);

  return (
    <table className="w-full">
      <thead className='bg-[#F4EDAF]'>
        <tr>
          <th className="">Id</th>
          <th className="">Product Name</th>
          <th className="">Sub Category</th>
          <th className="">Category</th>
          <th className="">Status</th>
          <th className="">Actions</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <ProductRow key={product.id} product={product} />
        ))}
      </tbody>
    </table>
  );
};

export default ProductTable;