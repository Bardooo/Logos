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

const Menu: React.FC<MenuProps> = ({items, navigationTitles}) => {
  return (
    <section className='menu'>
      {navigationTitles.map((item) => (
        <div className="menu__inner" >
          <div className="menu__inner-block">
            <h1 className="menu__inner-block-title">{item.title}</h1>
            <MenuSwiper items={items} />
          </div>
        </div>
      ))}
    </section>
  );
};

export default Menu;
