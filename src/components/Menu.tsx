import React from 'react';
import MenuSwiper from './MenuSwiper'
import Navigation from './Navigation';

export type navigationTitlesType = {
  id: number,
  title: string
}
export type itemsType = {
  id: string,
  imageUrl: string,
  title: string,
  weight: number,
  text: string,
  price: number,
  count: number,
  info: [
    {
      title: string,
      value: number,
    }
  ];
}

type MenuProps = {
  items: itemsType[],
  navigationTitles: navigationTitlesType[]
}

const Menu: React.FC<MenuProps> = ({items, navigationTitles}) => {
  return (
    <section className='menu'>
      <Navigation />
      {navigationTitles.map((item, index) => (
        <div className="menu__inner" key={index}>
          <div className="menu__block">
            <h1 className="menu__title title">{item.title}</h1>
            <MenuSwiper items={items} />
          </div>
        </div>
      ))}
    </section>
  );
};

export default Menu;
