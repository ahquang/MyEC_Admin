import React from 'react';

type HeaderItemProps = {
  title: string;
};

const HeaderItem: React.FC<HeaderItemProps> = ({ title }) => {
  return (
    <div className='py-2.5 px-5 font-medium text-sm flex items-center cursor-pointer hover:bg-darkBrown'>
      {title}
    </div>
  );
};

export default HeaderItem;
