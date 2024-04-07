import React from 'react';

interface DataTableProps {
  data: any[];
}

const DataTable: React.FC<DataTableProps> = ({ data }) => {
  console.log(data);

  return (
    <div className='overflow-x-auto'>
      <table className='min-w-full bg-white shadow-md rounded-xl'>
        <thead className=''>
          <tr className='bg-blue-gray-100 text-gray-700'>
            <th className='py-3 px-4 text-left'>Action</th>
            <th className='py-3 px-4 text-left'>Order ID</th>
            <th className='py-3 px-4 text-left'>Customer</th>
            <th className='py-3 px-4 text-left'>Total</th>
          </tr>
        </thead>
        <tbody className='text-blue-gray-900'>
          {data.map((order) => (
            <tr className='border-b border-blue-gray-200'>
              <td className="py-3 px-4">
                <a href="#" className="font-medium text-blue-600 hover:text-blue-800">Edit</a>
              </td>
              <td className='py-3 px-4'>{order.id}</td>
              <td className='py-3 px-4'>{order.customer}</td>
              <td className='py-3 px-4'>{order.total}</td>
            </tr>
          ))}
        </tbody>
      </table >
    </div>

  );
};

export default DataTable;