import React from 'react'
import MenuSwiper from './MenuSwiper'


const MenuInner = ({id, title, items}) => {
  return (
    <div className="menu__inner" >
      <div className="menu__inner-block">
        <h1 className="menu__inner-block-title">{title}</h1>
        <MenuSwiper items={items} />
      </div>
    </div>
  )
}

export default MenuInner
