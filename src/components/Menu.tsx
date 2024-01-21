import React from 'react';
import MenuSwiper from './MenuSwiper'
import Navigation from './Navigation';

import banner from '../assets/img/banner.jpg'
import banner2x from '../assets/img/banner@2x.jpg'
import banner3x from '../assets/img/banner@3x.jpg'

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
      <img src={banner} srcSet={`${banner2x} 2x, ${banner3x} 3x`} alt="предложение" className="header-bottom-img" />
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
