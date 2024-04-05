import React from 'react';

interface Props {
  name: string;
}

const Cards: React.FC<Props> = ({ name }) => {
  return (
    <header className=''>
      {name}
    </header>
  );
};

export default Cards;
