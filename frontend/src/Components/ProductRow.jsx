import React from 'react';
import ProductActions from './ProductActions';

const ProductRow = ({ product }) => {
  return (
    <tr className='text-center'>
      <td className="">{product.id}</td>
      <td className="">{product.name}</td>
      <td className="">{product.subCategory}</td>
      <td className="">{product.category}</td>
      <td className={`text-center ${product.status === 'active' ? 'text-green-500' : 'text-red-500'}`}>
  {product.status}
      </td>
      <td className="">
        <ProductActions />
      </td>
    </tr>
  );
};

export default ProductRow;