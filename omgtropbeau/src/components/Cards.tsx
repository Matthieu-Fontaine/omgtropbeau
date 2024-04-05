import React, { useState } from 'react';

interface CardProps {
  name: string;
  description?: string;
}

const Cards: React.FC<CardProps> = ({ name, description }) => {
  const [count, setCount] = useState(0);

  return (
    <div className='border-2 border-x-gray-400 rounded-md p-3 flex justify-center items-center flex-col
                    hover:translate-x-0.5 hover:translate-y-0.5' onClick={() => setCount(count + 1)}>
      <h1>{name}</h1>
      <p>{description}</p>
      <img className='rounded-md' src='https://picsum.photos/200/250' alt='random' />
      <p>{count}</p>
    </div>
  );
};

export default Cards;
