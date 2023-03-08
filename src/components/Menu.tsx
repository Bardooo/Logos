import React from 'react';
import MenuInner from './MenuInner'

const Menu = ({items, navigationTitles}) => {
  console.log(navigationTitles);
  return (
    <div className='menu'>
      {navigationTitles.map((item: any, index: Number) => (
        <MenuInner key={index} {...item} items={items} />
      ))}
    </div>
  );
};

export default Menu;
