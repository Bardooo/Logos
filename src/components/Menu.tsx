import React from 'react';
import MenuSwiper from './MenuSwiper'

type navigationTitlesType = {
  id: number,
  title: string
}
export type itemsType = {
  id: number,
  imageUrl: string,
  title: string,
  weight: number,
  text: string,
  price: number
}

type MenuProps = {
  items: itemsType[],
  navigationTitles: navigationTitlesType[]
}

const breakpoints = {
  320: {
    slidesPerView: 1,
    spaceBetween: -15
  },
  450: {
    slidesPerView: 1,
    spaceBetween: -100
  },
  552: {
    slidesPerView: 1,
    spaceBetween: -200
  },
  700: {
    slidesPerView: 2,
    spaceBetween: -20
  },
  784: {
    slidesPerView: 2,
    spaceBetween: -100
  },
  1090: {
    slidesPerView: 3,
    spaceBetween: -100
  },
  1470: {
    slidesPerView: 4,
    spaceBetween: -140
  }
}

const Menu: React.FC<MenuProps> = ({items, navigationTitles}) => {
  return (
    <div className='menu'>
      {navigationTitles.map((item) => (
        <div className="menu__inner" >
          <div className="menu__inner-block">
            <h1 className="menu__inner-block-title">{item.title}</h1>
            <MenuSwiper items={items} breakpoints={breakpoints} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Menu;
