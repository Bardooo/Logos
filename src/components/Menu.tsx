import React from 'react';
import MenuSwiper from './MenuSwiper'

const Menu = ({items}) => {
  return (
    <div className='menu'>
      <div className="menu__inner">
        <div className="menu__inner-block">
          <h1 className="menu__inner-block-title">ХОЛОДНЫЕ ЗАКУСКИ</h1>
          <MenuSwiper items={items} />
        </div>
      </div>
      <div className="menu__inner">
        <div className="menu__inner-block">
          <h1 className="menu__inner-block-title">ГОРЯЧИЕ ЗАКУСКИ</h1>
          <MenuSwiper items={items} />
        </div>
      </div>
      <div className="menu__inner">
        <div className="menu__inner-block">
          <h1 className="menu__inner-block-title">МЯСНЫЕ БЛЮДА</h1>
          <MenuSwiper items={items} />
        </div>
      </div>
    </div>
  );
};

export default Menu;
