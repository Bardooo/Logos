import React from 'react';
import MenuSwiper from './MenuSwiper'

type MenuProps = {
  items: {},
  navigationTitles: any[]
}

const Menu: React.FC<MenuProps> = ({items, navigationTitles}) => {
  return (
    <div className='menu'>
      {navigationTitles.map((item: {id: Number, title: String}) => (
        <div className="menu__inner" >
          <div className="menu__inner-block">
            <h1 className="menu__inner-block-title">{item.title}</h1>
            <MenuSwiper items={items} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Menu;
