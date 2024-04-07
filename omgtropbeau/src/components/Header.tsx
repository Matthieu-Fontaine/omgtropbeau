import React from 'react';

interface Props {
  name: string;
}

const Header: React.FC<Props> = ({ name }) => {
  return (
    <header className='min-h-fit h-16 bg-white rounded-lg flex justify-center items-center mb-2'>
      <h1 className='text-4xl text-center'>
        {name}
      </h1>
    </header>
  );
};

export default Header;